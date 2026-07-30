"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactFormAction } from "@/app/contact/actions";
import type { ContactFormResult } from "@/lib/contact/types";

const fieldErrorsOf = (state: ContactFormResult | null) =>
  state && !state.ok && state.error === "validation" ? state.fieldErrors : {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-accent px-8 py-4 text-sm font-medium tracking-wide text-background transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactFormAction, null);
  const fieldErrors = fieldErrorsOf(state);

  if (state?.ok) {
    return (
      <div
        role="status"
        className="border border-accent/40 bg-surface p-8 text-center"
      >
        <h3 className="font-heading text-xl font-bold text-foreground">
          Message Sent
        </h3>
        <p className="mt-2 text-foreground-muted">
          Thanks for getting in touch. We&apos;ll be in contact as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="relative space-y-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-full opacity-0"
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm tracking-wide text-foreground-muted"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className="mt-2 w-full border border-border-hairline bg-surface px-4 py-3 text-foreground focus:border-accent focus:outline-none"
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-400">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm tracking-wide text-foreground-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className="mt-2 w-full border border-border-hairline bg-surface px-4 py-3 text-foreground focus:border-accent focus:outline-none"
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-400">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="text-sm tracking-wide text-foreground-muted"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
          className="mt-2 w-full border border-border-hairline bg-surface px-4 py-3 text-foreground focus:border-accent focus:outline-none"
        />
        {fieldErrors.phone && (
          <p id="phone-error" className="mt-2 text-sm text-red-400">
            {fieldErrors.phone}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-sm tracking-wide text-foreground-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className="mt-2 w-full border border-border-hairline bg-surface px-4 py-3 text-foreground focus:border-accent focus:outline-none"
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-400">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {state && !state.ok && state.error === "send-failed" && (
        <p role="alert" className="text-sm text-red-400">
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
