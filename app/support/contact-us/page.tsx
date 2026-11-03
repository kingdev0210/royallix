"use client";

import { useState } from "react";
import Link from "next/link";
import { montserrat } from "../../fonts";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  optIn: false,
};

function inputClass(hasError) {
  const base =
    "mt-2 w-full rounded border bg-white px-3 py-2.5 text-[15px] outline-none transition-colors";
  const color = hasError
    ? " border-red-600 focus:border-red-600"
    : " border-slate-300 focus:border-slate-800";
  return base + color;
}

export default function ContactUs() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(data) {
    const next = {};
    if (!data.fullName.trim()) next.fullName = "The field is required.";
    if (!data.email.trim()) next.email = "The field is required.";
    if (!data.phone.trim()) next.phone = "The field is required.";
    if (!data.message.trim()) next.message = "The field is required.";
    if (!data.optIn) next.optIn = "The field is required.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <div className={montserrat.className} style={{ backgroundColor: "#f4f6f8" }}>
      <section className="bg-white px-6 pb-14 pt-[72px] md:pb-16 md:pt-24">
        <div className="mx-auto max-w-[640px] text-center">
          <h1
            className="mb-4 text-[2.25rem] font-semibold leading-[1.25] tracking-[-0.01em] md:text-[2.75rem]"
            style={{ color: "#001528" }}
          >
            Contact Us
          </h1>
          <p
            className="mx-auto max-w-[520px] text-[15px] font-light leading-[1.7] md:text-[16px]"
            style={{ color: "#7d8b9a" }}
          >
            Looking for a full-scale development agency? Then get in touch and
            we&apos;ll be glad to talk to you.
          </p>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat px-4 pb-20 pt-6 md:pt-10"
        style={{ backgroundImage: "url('/imgs/bg-41.png')" }}
      >
        <div className="relative z-10 mx-auto w-full max-w-3xl rounded-md border border-slate-200 bg-white px-6 py-8 shadow-lg md:px-10 md:py-10">
          <h2
            className="mb-8 text-2xl font-bold md:text-3xl"
            style={{ color: "#001528" }}
          >
            Tell us about your project
          </h2>

          {submitted ? (
            <p className="rounded-md bg-green-50 px-4 py-3 text-[15px] text-green-800">
              Thank you! Your message has been received. We&apos;ll be in touch
              soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <label
                  className="block text-sm font-medium"
                  style={{ color: "#001528" }}
                >
                  Full Name *
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={(e) =>
                      setForm({ ...form, fullName: e.target.value })
                    }
                    className={inputClass(Boolean(errors.fullName))}
                    style={{ color: "#001528" }}
                  />
                  {errors.fullName ? (
                    <span
                      className="mt-1 block text-sm"
                      style={{ color: "#e6332c" }}
                    >
                      {errors.fullName}
                    </span>
                  ) : null}
                </label>

                <label
                  className="block text-sm font-medium"
                  style={{ color: "#001528" }}
                >
                  Email *
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={inputClass(Boolean(errors.email))}
                    style={{ color: "#001528" }}
                  />
                  {errors.email ? (
                    <span
                      className="mt-1 block text-sm"
                      style={{ color: "#e6332c" }}
                    >
                      {errors.email}
                    </span>
                  ) : null}
                </label>
              </div>

              <label
                className="mb-5 block text-sm font-medium"
                style={{ color: "#001528" }}
              >
                Phone *
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass(Boolean(errors.phone))}
                  style={{ color: "#001528" }}
                />
                {errors.phone ? (
                  <span
                    className="mt-1 block text-sm"
                    style={{ color: "#e6332c" }}
                  >
                    {errors.phone}
                  </span>
                ) : null}
              </label>

              <label
                className="mb-6 block text-sm font-medium"
                style={{ color: "#001528" }}
              >
                How we can help you? *
                <textarea
                  name="message"
                  rows={5}
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={inputClass(Boolean(errors.message)) + " min-h-36 resize-y"}
                  style={{ color: "#001528" }}
                />
                {errors.message ? (
                  <span
                    className="mt-1 block text-sm"
                    style={{ color: "#e6332c" }}
                  >
                    {errors.message}
                  </span>
                ) : null}
              </label>

              <div className="mb-8">
                <label className="flex items-start gap-3 text-sm text-slate-500">
                  <input
                    type="checkbox"
                    name="optIn"
                    checked={form.optIn}
                    onChange={(e) =>
                      setForm({ ...form, optIn: e.target.checked })
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border border-slate-400"
                  />
                  <span>
                    By checking this box, I Opt-in to receive the messages from
                    Royallix.
                  </span>
                </label>
                {errors.optIn ? (
                  <span
                    className="mt-1 block pl-7 text-sm"
                    style={{ color: "#e6332c" }}
                  >
                    {errors.optIn}
                  </span>
                ) : null}
                <p className="mt-2 pl-7 text-sm text-slate-500">
                  Please read our{" "}
                  <Link
                    href="#"
                    className="font-medium underline underline-offset-2"
                    style={{ color: "#e6332c" }}
                  >
                    privacy policy.
                  </Link>
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded px-14 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#001528" }}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
