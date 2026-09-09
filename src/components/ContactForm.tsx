"use client";

import { FormEvent, useId, useState, useTransition } from "react";

type ContactFormProps = {
  variant?: "page" | "section";
};

export default function ContactForm({ variant = "page" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, startTransition] = useTransition();
  const uid = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    startTransition(() => {
      setSubmitted(true);
      form.reset();
    });
  }

  return (
    <div>
      {variant === "page" && (
        <div className="mb-6">
          <h2 className="section-title text-xl">Contact Us</h2>
          <p className="mt-2 text-text-muted">
            Need help with your AC? Our experts are ready to assist you.
          </p>
        </div>
      )}

      {submitted && (
        <div
          className="mb-4 rounded-md border border-brand-green/40 bg-[#f3fbee] px-4 py-3 text-sm font-semibold text-brand-navy"
          role="status"
          aria-live="polite"
        >
          Thank you! Your message has been received. We will contact you soon.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        method="post"
        action="#"
        noValidate
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="sr-only" htmlFor={`${uid}-fullName`}>
            Your Full Name
          </label>
          <input
            id={`${uid}-fullName`}
            name="fullName"
            required
            placeholder="Your Full Name"
            className="form-input"
            autoComplete="name"
          />
          <label className="sr-only" htmlFor={`${uid}-mobile`}>
            Your Mobile Number
          </label>
          <input
            id={`${uid}-mobile`}
            name="mobile"
            type="tel"
            required
            placeholder="Your Mobile Number"
            className="form-input"
            autoComplete="tel"
          />
          <label className="sr-only" htmlFor={`${uid}-email`}>
            Your Email Address
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            required
            placeholder="Your Email Address"
            className="form-input"
            autoComplete="email"
          />
          <label className="sr-only" htmlFor={`${uid}-subject`}>
            Your Subject
          </label>
          <input
            id={`${uid}-subject`}
            name="subject"
            required
            placeholder="Your Subject"
            className="form-input"
          />
        </div>

        <label className="sr-only" htmlFor={`${uid}-message`}>
          Your Message
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          required
          rows={6}
          placeholder="Write Something Here..."
          className="form-input resize-y"
        />

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded bg-brand-green py-3.5 text-base font-extrabold uppercase tracking-wide text-brand-navy transition hover:bg-brand-green-dark disabled:opacity-70"
        >
          {pending ? "Sending..." : "Submit Now"}
        </button>
      </form>
    </div>
  );
}
