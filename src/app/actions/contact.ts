"use server";

import { isLocale, type Locale } from "@/i18n/config";

const FROM_ADDRESS = "mobiqo <noreply@mobiqo.app>";
const TO_ADDRESS = "hello@mobiqo.app";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string }
  | { status: "validation"; fields: Partial<Record<"name" | "email" | "message", string>> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

function escape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const localeRaw = clean(formData.get("locale"));
  const locale: Locale = isLocale(localeRaw) ? localeRaw : "tr";

  // honeypot — silently succeed
  if (clean(formData.get("website")) !== "") {
    return { status: "success" };
  }

  // submission timing — must be > 1.5s after page load
  const renderedAt = Number(clean(formData.get("rendered_at")));
  if (Number.isFinite(renderedAt) && Date.now() - renderedAt < 1500) {
    return { status: "success" };
  }

  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const subject = clean(formData.get("subject"));
  const message = clean(formData.get("message"));

  const fields: Partial<Record<"name" | "email" | "message", string>> = {};
  if (!name) fields.name = "name_required";
  if (!email) fields.email = "email_required";
  else if (!EMAIL_RE.test(email)) fields.email = "email_invalid";
  if (!message) fields.message = "message_required";
  else if (message.length < 10) fields.message = "message_short";

  if (Object.keys(fields).length > 0) {
    return { status: "validation", fields };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return { status: "error", message: "Email service is not configured." };
  }

  const finalSubject = subject || `[mobiqo] ${name}`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #111;">
      <h2 style="margin: 0 0 16px; font-weight: 600;">New message from mobiqo.app</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td style="padding: 4px 12px 4px 0; color: #666; vertical-align: top; width: 80px;">Name</td><td style="padding: 4px 0;"><strong>${escape(name)}</strong></td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color: #666; vertical-align: top;">Email</td><td style="padding: 4px 0;"><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        ${subject ? `<tr><td style="padding: 4px 12px 4px 0; color: #666; vertical-align: top;">Subject</td><td style="padding: 4px 0;">${escape(subject)}</td></tr>` : ""}
        <tr><td style="padding: 4px 12px 4px 0; color: #666; vertical-align: top;">Locale</td><td style="padding: 4px 0;">${escape(locale)}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <div style="white-space: pre-wrap; word-break: break-word;">${escape(message)}</div>
    </div>
  `.trim();

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [TO_ADDRESS],
        reply_to: email,
        subject: finalSubject,
        html,
        text: `From: ${name} <${email}>\nLocale: ${locale}\n${subject ? `Subject: ${subject}\n` : ""}\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend error:", res.status, detail);
      return { status: "error", message: "Could not send message." };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Contact form fetch failed:", err);
    return { status: "error", message: "Network error." };
  }
}
