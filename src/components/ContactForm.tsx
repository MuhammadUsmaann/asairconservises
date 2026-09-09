"use client";

import { useId, useState } from "react";

type ContactFormProps = {
  variant?: "page" | "section";
};

export default function ContactForm({ variant = "page" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const uid = useId();

  function update(field: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSend() {
    setError("");
    if (
      !values.fullName.trim() ||
      !values.mobile.trim() ||
      !values.email.trim() ||
      !values.subject.trim() ||
      !values.message.trim()
    ) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    setPending(true);
    window.setTimeout(() => {
      setSubmitted(true);
      setValues({
        fullName: "",
        mobile: "",
        email: "",
        subject: "",
        message: "",
      });
      setPending(false);
    }, 250);
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

      {error && (
        <p className="mb-3 text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      )}

      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="sr-only" htmlFor={`${uid}-fullName`}>
            Your Full Name
          </label>
          <input
            id={`${uid}-fullName`}
            name="fullName"
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
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
            value={values.mobile}
            onChange={(e) => update("mobile", e.target.value)}
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
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
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
            value={values.subject}
            onChange={(e) => update("subject", e.target.value)}
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
          rows={6}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Write Something Here..."
          className="form-input resize-y"
        />

        <button
          type="button"
          onClick={handleSend}
          disabled={pending}
          className="w-full rounded bg-brand-green py-3.5 text-base font-extrabold uppercase tracking-wide text-brand-navy transition hover:bg-brand-green-dark disabled:opacity-70"
        >
          {pending ? "Sending..." : "Submit Now"}
        </button>
      </div>
    </div>
  );
}
