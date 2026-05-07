"use client";

import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ borderColor: "var(--border)", background: "oklch(97% 0.012 85 / 0.95)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-2">
          <span
            className="text-xl font-black italic"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--surface)" }}
          >
            SK
          </span>
          <span
            className="text-xs uppercase tracking-[0.2em] font-semibold"
            style={{ fontFamily: "var(--font-dmsans)", color: "var(--text-muted)" }}
          >
            Landscaping
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[["#services", "Services"], ["#work", "Our Work"], ["#process", "Process"], ["#faq", "FAQ"], ["#contact", "Contact"]].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--surface)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="tel:4372654770"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
          style={{ background: "var(--surface)", color: "var(--text-on-surface)", fontFamily: "var(--font-dmsans)" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.49 6.49l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          437-265-4770
        </a>

        <button
          className="md:hidden p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          style={{ color: "var(--text-primary)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t py-4 px-6 flex flex-col gap-4"
          style={{ borderColor: "var(--border)", background: "oklch(97% 0.012 85 / 0.98)" }}
        >
          {[["#services", "Services"], ["#work", "Our Work"], ["#process", "Process"], ["#faq", "FAQ"], ["#contact", "Contact"]].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-base font-medium py-1"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:4372654770"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold text-sm"
            style={{ background: "var(--surface)", color: "var(--text-on-surface)", fontFamily: "var(--font-dmsans)" }}
          >
            Call 437-265-4770
          </a>
        </div>
      )}
    </header>
  );
}
