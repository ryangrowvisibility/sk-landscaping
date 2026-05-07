"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "SK Landscaping operates out of Caledon, ON and serves Caledon, Brampton, and the broader Peel Region. Reach out at 437-265-4770 to confirm your address before booking.",
  },
  {
    q: "Do you offer snow removal contracts?",
    a: "Yes. Snow removal is a seasonal service offered through the winter months. Clients on seasonal agreements receive priority scheduling and consistent service throughout the winter. Call to discuss pricing and availability for the upcoming season.",
  },
  {
    q: "What does a lawn care package typically include?",
    a: "Standard lawn care includes mowing, edging, and seasonal cleanup. Additional services — garden bed maintenance, fertilization, and overseeding — can be added based on your property's needs. SK Landscaping works with each client to build a plan that fits their yard.",
  },
  {
    q: "Can you transform an overgrown backyard?",
    a: "Yes. Backyard transformations are one of the services clients are most satisfied with. Multiple reviews describe going from a messy, overgrown yard to a polished outdoor space. Call to discuss scope and timing.",
  },
  {
    q: "Do you do one-time jobs or only ongoing contracts?",
    a: "Both. SK Landscaping handles one-time projects (spring cleanups, power washing, backyard transformations) as well as ongoing seasonal agreements for lawn care and snow removal. There is no obligation to commit to a full-season contract for one-time work.",
  },
  {
    q: "What is the best time to book spring cleanup?",
    a: "Early spring booking is recommended as slots fill quickly once the season starts. Call 437-265-4770 to check availability — the team is active and the business has confirmed hours, so you should get a fast response.",
  },
];

export default function AccordionFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="divide-y" style={{ borderColor: "var(--border)" }}>
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-start justify-between gap-4 py-5 text-left transition-colors duration-200"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span
              className="text-base font-semibold leading-snug"
              style={{
                color: openIdx === i ? "var(--surface)" : "var(--text-primary)",
                fontFamily: "var(--font-dmsans)",
                transition: "color 200ms",
              }}
            >
              {faq.q}
            </span>
            <span
              className="mt-0.5 shrink-0 transition-transform duration-200"
              style={{ transform: openIdx === i ? "rotate(45deg)" : "rotate(0deg)", color: "var(--accent)" }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          {openIdx === i && (
            <div
              className="pb-5 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
