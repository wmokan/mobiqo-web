"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions/contact";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

const initialState: ContactState = { status: "idle" };

function SubmitButton({ dict }: { dict: Dictionary }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? (
        <>
          <span
            className="size-3 animate-spin rounded-full border-2 border-background/40 border-t-background"
            aria-hidden="true"
          />
          {dict.contact.form.submitting}
        </>
      ) : (
        <>
          {dict.contact.form.submit}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8m-3-3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </>
      )}
    </button>
  );
}

export function ContactForm({ lang, dict }: Props) {
  const [state, formAction] = useActionState(submitContact, initialState);
  const [renderedAt] = useState(() => Date.now().toString());
  const formRef = useRef<HTMLFormElement | null>(null);
  const formId = useId();

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent-soft p-8 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent text-background">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 10l3.5 3.5L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold tracking-tight">
          {dict.contact.form.success_title}
        </h3>
        <p className="mt-2 text-sm text-foreground/80">
          {dict.contact.form.success_body}
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-elev/60 px-4 py-2 text-xs font-medium text-foreground/80 transition hover:border-accent/40 hover:text-foreground"
        >
          {dict.contact.form.send_another}
        </button>
      </div>
    );
  }

  const fieldError =
    state.status === "validation" ? state.fields : undefined;
  const errorKey = (key?: string) =>
    key
      ? dict.contact.form.validation[key as keyof typeof dict.contact.form.validation]
      : undefined;

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="space-y-5"
    >
      <input type="hidden" name="locale" value={lang} />
      <input type="hidden" name="rendered_at" value={renderedAt} />
      {/* honeypot */}
      <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          name="name"
          label={dict.contact.form.name}
          placeholder={dict.contact.form.name_placeholder}
          required
          autoComplete="name"
          error={errorKey(fieldError?.name)}
        />
        <Field
          id={`${formId}-email`}
          name="email"
          type="email"
          label={dict.contact.form.email}
          placeholder={dict.contact.form.email_placeholder}
          required
          autoComplete="email"
          error={errorKey(fieldError?.email)}
        />
      </div>
      <Field
        id={`${formId}-subject`}
        name="subject"
        label={dict.contact.form.subject}
        placeholder={dict.contact.form.subject_placeholder}
      />
      <TextArea
        id={`${formId}-message`}
        name="message"
        label={dict.contact.form.message}
        placeholder={dict.contact.form.message_placeholder}
        required
        rows={6}
        error={errorKey(fieldError?.message)}
      />

      <div className="flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        {state.status === "error" ? (
          <p className="text-sm text-red-400">
            {dict.contact.form.error_title}{" "}
            <a href={`mailto:${dict.contact.email}`} className="underline">
              {dict.contact.email}
            </a>
          </p>
        ) : (
          <span />
        )}
        <SubmitButton dict={dict} />
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
};

function Field({ id, name, label, placeholder, type = "text", required, autoComplete, error }: FieldProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-xs font-medium text-foreground/80">
        <span>
          {label}
          {required ? <span className="ml-0.5 text-accent">*</span> : null}
        </span>
        {error ? <span className="text-red-400">{error}</span> : null}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={`block w-full rounded-xl border bg-background-elev/40 px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20 ${
          error ? "border-red-500/50" : "border-border"
        }`}
      />
    </label>
  );
}

type TextAreaProps = FieldProps & { rows?: number };

function TextArea({ id, name, label, placeholder, required, rows = 4, error }: TextAreaProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-xs font-medium text-foreground/80">
        <span>
          {label}
          {required ? <span className="ml-0.5 text-accent">*</span> : null}
        </span>
        {error ? <span className="text-red-400">{error}</span> : null}
      </span>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        aria-invalid={Boolean(error)}
        className={`block w-full resize-y rounded-xl border bg-background-elev/40 px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20 ${
          error ? "border-red-500/50" : "border-border"
        }`}
      />
    </label>
  );
}
