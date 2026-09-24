"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

import { submitPublicForm, generateIdempotencyKey } from "@/lib/erpApi";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submissionNo, setSubmissionNo] = useState("");
  const [idempotencyKey, setIdempotencyKey] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");

    const key = idempotencyKey || generateIdempotencyKey();
    if (!idempotencyKey) setIdempotencyKey(key);

    try {
      const result = await submitPublicForm({
        type: "CONTACT",
        idempotencyKey: key,
        payload: {
          name: "Newsletter Subscriber",
          email: email.trim().toLowerCase(),
          subject: "Newsletter Subscription",
          message: "Website newsletter subscription request",
        },
      });

      setStatus("success");
      setSubmissionNo(result.submissionNo);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
        <CheckCircle className="w-4 h-4 shrink-0" />
        <span>Subscribed successfully! {submissionNo && `(Ref: ${submissionNo})`}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
      <div className="relative flex-1">
        <Mail className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="email"
          required
          placeholder="Enter your email for robotics updates..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white border border-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-text-primary focus:outline-none focus:border-accent"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-5 py-2.5 rounded-xl bg-[#002B66] hover:bg-[#001D47] text-white font-bold text-xs uppercase tracking-wider transition-colors disabled:opacity-50 flex items-center justify-center shrink-0 cursor-pointer"
      >
        {status === "submitting" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Subscribe"}
      </button>
    </form>
  );
}
