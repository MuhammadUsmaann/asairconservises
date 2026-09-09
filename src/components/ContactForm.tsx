"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  variant?: "page" | "section";
};

export default function ContactForm({ variant = "page" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
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

      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="sr-only" htmlFor="fullName">
            Your Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            placeholder="Your Full Name"
            className="form-input"
            autoComplete="name"
          />
          <label className="sr-only" htmlFor="mobile">
            Your Mobile Number
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            placeholder="Your Mobile Number"
            className="form-input"
            autoComplete="tel"
          />
          <label className="sr-only" htmlFor="email">
            Your Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your Email Address"
            className="form-input"
            autoComplete="email"
          />
          <label className="sr-only" htmlFor="subject">
            Your Subject
          </label>
          <input
            id="subject"
            name="subject"
            required
            placeholder="Your Subject"
            className="form-input"
          />
        </div>

        <label className="sr-only" htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Write Something Here..."
          className="form-input resize-y"
        />

        <button
          type="submit"
          className="w-full rounded bg-brand-green py-3.5 text-base font-extrabold uppercase tracking-wide text-brand-navy transition hover:bg-brand-green-dark"
        >
          Submit Now
        </button>

        {submitted && (
          <p className="text-sm font-medium text-brand-blue" role="status">
            Thank you! Your message has been received. We will contact you soon.
          </p>
        )}
      </form>
    </div>
  );
}
