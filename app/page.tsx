import Image from "next/image";
import NavBar from "./components/NavBar";
import ImageMarquee from "./components/ImageMarquee";
import AccordionFAQ from "./components/AccordionFAQ";

const heroPhoto = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGNYvvAW-2UKth3SHxRMQc99xWc2GX8s397v3zP8uUZxa8R7A2Sn9PNgxJVTi1raESet9p_ZeE-n_O7hrq8p94hB9kz_O8AOIc5FdAVPtMtZHz-XXttVc8HBnvxG8nhxYWElwtbSOMJ5xEC=w800-h600-k-no";

const services = [
  {
    title: "Lawn Care",
    description:
      "Weekly or bi-weekly mowing, clean edging, and seasonal cleanups that keep your property looking maintained year-round. Consistent service, reliable scheduling — no chasing the crew down to show up.",
    tags: ["Mowing", "Edging", "Seasonal Cleanup"],
    num: "01",
  },
  {
    title: "Landscaping & Backyard Transformation",
    description:
      "From garden bed installation to full backyard overhauls — SK Landscaping turns neglected or overgrown outdoor spaces into places you're proud to use. Multiple clients have described the before-and-after as stunning.",
    tags: ["Garden Beds", "Backyard Overhaul", "Planting"],
    num: "02",
  },
  {
    title: "Snow Removal",
    description:
      "Residential snow removal throughout the winter season with consistent, on-time service. Clients on seasonal agreements are prioritized. The team handles driveways, walkways, and any outdoor surface that needs to be cleared.",
    tags: ["Driveways", "Walkways", "Seasonal Contracts"],
    num: "03",
  },
  {
    title: "Power Washing",
    description:
      "High-pressure cleaning for driveways, pathways, patios, and outdoor surfaces. Removes stains, moss, algae, and years of buildup — a cost-effective way to refresh any outdoor surface without replacement.",
    tags: ["Driveways", "Patios", "Pathways"],
    num: "04",
  },
];

const testimonials = [
  {
    name: "Gurvinder K.",
    location: "Caledon",
    service: "Snow Removal — Full Season",
    quote:
      "The team handled snow removal for our home for the entire season at a very reasonable price. Great skill and excellent service throughout. Highly recommended to anyone looking for dependable, professional service.",
    photo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHvcDgUm8x2s3HJpXGSFkN3Zo9xxW_Xc5yZGdOvmhilIE8hhmHbp-Zwh5l5ljNv9uuESi-rM4pzIFIuAzA4WcvbgWO2QVjfLjcorWkMFTs3pczqtZ9svoqpzVjcv5Nnr2K1lolEOlXNGUUM4c=w800-h600-k-no",
    photoAlt: "SK Landscaping seasonal work",
  },
  {
    name: "Reet A.",
    location: "Brampton",
    service: "Snow Removal — Winter",
    quote:
      "Great service all winter long. Always on time and very professional. The crew showed up without being reminded and cleared everything properly every time. Will continue using them next season.",
    photo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF70FIFGTC-1QSUuB_KHzi65eC9VzwyItIUlRyfImz9mQnQbYCVmc6kLlTNgLwQsDPJKL9kSCqlvqtZwIljOE_rHqFtuv4XmWsIuagtUQ4yB4Fvmd8QwL_Qjubcny_Mwzou3PS4abJ8l0_0=w800-h600-k-no",
    photoAlt: "SK Landscaping outdoor property",
  },
  {
    name: "Verified Google Reviewer",
    location: "Peel Region",
    service: "Backyard Landscaping",
    quote:
      "The backyard went from messy and overgrown to absolutely stunning. Could not believe the transformation. Highly recommend SK Landscaping to anyone who wants real results from a team that shows up and does the work.",
    photo: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEynmcW4CYR-xmdK6UqmXjO2E6gveLGjH_xGrIwVZb4LsuCheuhyPp95t7SeaFs3PIwQVTmrYiA1_i8TLEttx0K48D8iFIlC2E_w-QqkbiwNLLiJB84lphPUcFjLZFPmxgfxobj=w800-h600-k-no",
    photoAlt: "SK Landscaping backyard transformation",
  },
];

const process = [
  {
    step: "01",
    title: "Call or Text",
    body: "Reach SK Landscaping at 437-265-4770. Describe your property and what you need — one-time cleanup, seasonal contract, snow removal, power washing, or a full backyard transformation.",
  },
  {
    step: "02",
    title: "Site Assessment & Quote",
    body: "The team assesses your property and provides straightforward pricing. No vague estimates that balloon into something else — clients consistently mention fair pricing as a reason they stay.",
  },
  {
    step: "03",
    title: "Scheduled Service",
    body: "Work is scheduled and the team shows up as committed. For ongoing contracts, scheduling is consistent — you do not need to follow up to confirm they are coming.",
  },
  {
    step: "04",
    title: "The Work",
    body: "Lawn care, landscaping, snow removal, or power washing — each job is done thoroughly. Multiple clients note the attention to detail and the fact that results exceed expectations.",
  },
  {
    step: "05",
    title: "Seasonal Planning",
    body: "For returning clients, SK Landscaping plans ahead for the next season — spring cleanup after winter, fall prep before snow, summer maintenance between seasonal shifts. Proactive, not reactive.",
  },
];

export default function Page() {
  return (
    <>
      <NavBar />

      <main>
        {/* HERO: Asymmetric Bento — cream bg, large type, image right, trust bento cards */}
        <section
          className="min-h-[100dvh] pt-16 flex items-center"
          style={{ background: "var(--bg)" }}
          aria-label="Hero"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 w-full">
            <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
              {/* Left */}
              <div>
                {/* Rating strip */}
                <div
                  className="inline-flex items-center gap-3 px-4 py-2 mb-8 border"
                  style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
                >
                  <div className="flex gap-0.5" aria-label="5 stars">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--accent)" }} aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-dmsans)" }}>
                    5.0 across 32 Google reviews
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-dmsans)" }}>
                    Caledon &amp; Peel Region
                  </span>
                </div>

                {/* Giant headline — bolder: massive type */}
                <h1
                  className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight mb-8"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--surface)" }}
                >
                  Your yard,
                  <br />
                  <span className="italic" style={{ color: "var(--accent)" }}>transformed.</span>
                </h1>

                <p
                  className="text-lg leading-relaxed mb-10 max-w-xl"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
                >
                  SK Landscaping brings professional lawn care, backyard makeovers, snow removal, and power washing to Caledon, Brampton, and Peel Region — done right, at prices that make sense.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  <a
                    href="tel:4372654770"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold text-base transition-all duration-200 active:scale-[0.97]"
                    style={{ background: "var(--surface)", color: "var(--text-on-surface)", fontFamily: "var(--font-dmsans)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.49 6.49l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    437-265-4770
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-base border transition-all duration-200 active:scale-[0.97]"
                    style={{ border: "2px solid var(--surface)", color: "var(--surface)", fontFamily: "var(--font-dmsans)" }}
                  >
                    View Services
                  </a>
                </div>

                {/* Bento trust row */}
                <div className="grid grid-cols-3 divide-x border" style={{ borderColor: "var(--border)" }}>
                  {[
                    { val: "32", label: "Google Reviews" },
                    { val: "5★", label: "Perfect Rating" },
                    { val: "3", label: "Cities Served" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="px-5 py-4 text-center"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div className="text-2xl font-black mb-0.5" style={{ fontFamily: "var(--font-playfair)", color: "var(--surface)" }}>
                        {item.val}
                      </div>
                      <div className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "var(--font-dmsans)" }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Hero photo */}
              <div className="relative overflow-hidden" style={{ height: "520px" }}>
                <Image
                  src={heroPhoto}
                  alt="SK Landscaping — professional landscaping and lawn care in Caledon, Brampton, and Peel Region"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                {/* Oxblood overlay strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-5"
                  style={{ background: "var(--surface)" }}
                >
                  <p className="text-sm font-semibold italic" style={{ fontFamily: "var(--font-playfair)", color: "var(--text-on-surface)" }}>
                    &ldquo;The backyard went from messy to stunning.&rdquo;
                  </p>
                  <p className="text-xs mt-1" style={{ color: "oklch(78% 0.030 80)", fontFamily: "var(--font-dmsans)" }}>
                    Verified Google Reviewer &middot; Peel Region
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE MARQUEE */}
        <section
          id="work"
          className="py-16"
          style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
          aria-label="Photo gallery"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--surface)", fontFamily: "var(--font-dmsans)" }}>
              Real Projects
            </p>
          </div>
          <ImageMarquee />
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 lg:py-36" style={{ background: "var(--bg)" }} aria-label="Services">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-[340px_1fr] gap-16 lg:gap-24">
              {/* Left: sticky label */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "var(--surface)", fontFamily: "var(--font-dmsans)" }}>
                  What We Do
                </p>
                <h2
                  className="text-4xl md:text-5xl font-black leading-tight mb-6"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--surface)" }}
                >
                  Four seasons of service
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}>
                  SK Landscaping handles your property year-round. One team, one call — from summer lawn care through winter snow removal.
                </p>
              </div>

              {/* Right: service list */}
              <div className="space-y-0 divide-y" style={{ borderColor: "var(--border)" }}>
                {services.map((svc, i) => (
                  <div key={i} className="py-8 flex gap-8 items-start">
                    <span
                      className="text-5xl font-black leading-none shrink-0 pt-1"
                      style={{ fontFamily: "var(--font-playfair)", color: "oklch(88% 0.020 75)", fontStyle: "italic" }}
                      aria-hidden="true"
                    >
                      {svc.num}
                    </span>
                    <div>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ fontFamily: "var(--font-playfair)", color: "var(--text-primary)" }}
                      >
                        {svc.title}
                      </h3>
                      <p
                        className="text-base leading-relaxed mb-4"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
                      >
                        {svc.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {svc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1.5 font-medium border"
                            style={{
                              borderColor: "var(--border)",
                              color: "var(--text-muted)",
                              fontFamily: "var(--font-dmsans)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS + PHOTOS — Named testimonial cards photo-paired */}
        <section
          className="py-24 lg:py-36"
          style={{ background: "var(--surface)" }}
          aria-label="Customer testimonials"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}>
                What Clients Say
              </p>
              <h2
                className="text-4xl md:text-5xl font-black leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--text-on-surface)" }}
              >
                A perfect 5 stars.
                <br />
                <span className="italic" style={{ color: "var(--accent)" }}>Thirty-two times over.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col"
                  style={{ background: "oklch(33% 0.070 18)", border: "1px solid oklch(45% 0.060 18)" }}
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ height: "200px" }}>
                    <Image
                      src={t.photo}
                      alt={t.photoAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex gap-1" aria-label="5 stars">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--accent)" }} aria-hidden="true">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <blockquote
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: "oklch(85% 0.020 80)", fontFamily: "var(--font-dmsans)" }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="border-t pt-4" style={{ borderColor: "oklch(45% 0.060 18)" }}>
                      <p className="font-semibold text-sm" style={{ color: "var(--text-on-surface)", fontFamily: "var(--font-dmsans)" }}>{t.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: "oklch(65% 0.030 60)", fontFamily: "var(--font-dmsans)" }}>
                        {t.location} &middot; {t.service}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJAYjjtJOqmIkRpyQh6lyMdFE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm border transition-all duration-200"
                style={{ border: "1px solid var(--accent)", color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}
              >
                Read all 32 reviews on Google
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-24 lg:py-36" style={{ background: "var(--bg)" }} aria-label="How it works">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-16">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "var(--surface)", fontFamily: "var(--font-dmsans)" }}>
                How It Works
              </p>
              <h2
                className="text-4xl md:text-5xl font-black leading-tight max-w-xl"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--surface)" }}
              >
                From first call to finished property
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {process.map((p, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div
                    className="text-6xl font-black leading-none italic"
                    style={{ fontFamily: "var(--font-playfair)", color: "oklch(88% 0.020 75)" }}
                    aria-hidden="true"
                  >
                    {p.step}
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--text-primary)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STANDARDS — full-bleed oxblood */}
        <section
          className="py-24 lg:py-36"
          style={{ background: "var(--surface)", borderTop: "1px solid oklch(45% 0.060 18)" }}
          aria-label="Our standards"
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: "var(--accent)", fontFamily: "var(--font-dmsans)" }}>
              Our Standard
            </p>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight mb-10 italic"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--text-on-surface)" }}
            >
              Fair prices. Real results. Every time.
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-relaxed" style={{ color: "oklch(80% 0.020 80)", fontFamily: "var(--font-dmsans)" }}>
                SK Landscaping has 32 five-star Google reviews. Not because they upsell clients, not because they chase reviews aggressively — but because they show up, do the work properly, and charge a fair price. That combination, reliably delivered, is what earns a perfect rating.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "oklch(80% 0.020 80)", fontFamily: "var(--font-dmsans)" }}>
                The snow removal reviews are particularly telling. Snow removal is a service where it is very easy to let a client down — a single missed visit at the wrong time destroys trust built over weeks. Multiple SK Landscaping clients note that the team was always on time, all winter long. That kind of consistency is not luck; it is how the business is run.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "oklch(80% 0.020 80)", fontFamily: "var(--font-dmsans)" }}>
                The backyard transformation reviews describe results that surprised even the clients who asked for them. Landscaping that turns a messy, overgrown yard into something you are proud to use — that is what happens when you hire people who take the craft seriously. SK Landscaping serves Caledon, Brampton, and the Peel Region with that same standard on every property, every season.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between" style={{ borderColor: "oklch(45% 0.060 18)" }}>
              <div>
                <p className="text-3xl font-black" style={{ fontFamily: "var(--font-playfair)", color: "var(--text-on-surface)" }}>9 Lipscott Dr, Caledon ON</p>
                <p className="text-sm mt-1" style={{ color: "oklch(65% 0.030 60)", fontFamily: "var(--font-dmsans)" }}>
                  Serving Caledon · Brampton · Peel Region
                </p>
              </div>
              <a
                href="tel:4372654770"
                className="inline-flex items-center gap-2 px-7 py-4 font-bold text-base transition-all duration-200"
                style={{ background: "var(--accent)", color: "var(--accent-text)", fontFamily: "var(--font-dmsans)" }}
              >
                437-265-4770
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 lg:py-36" style={{ background: "var(--bg)" }} aria-label="Frequently asked questions">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "var(--surface)", fontFamily: "var(--font-dmsans)" }}>
                Common Questions
              </p>
              <h2
                className="text-4xl md:text-5xl font-black leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--surface)" }}
              >
                Before you call
              </h2>
            </div>
            <AccordionFAQ />
          </div>
        </section>

        {/* CONTACT — Split */}
        <section
          id="contact"
          className="py-24 lg:py-36"
          style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}
          aria-label="Contact"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: "var(--surface)", fontFamily: "var(--font-dmsans)" }}>
                  Get in Touch
                </p>
                <h2
                  className="text-4xl md:text-5xl font-black leading-tight mb-6"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--surface)" }}
                >
                  Ready for a property
                  <br />
                  <span className="italic">you are proud of?</span>
                </h2>
                <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-dmsans)" }}>
                  Call or text SK Landscaping directly. Describe your property and what you need — lawn care, snow removal, backyard transformation, or power washing — and the team will get back to you promptly.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:4372654770"
                    className="flex items-center gap-4 p-5 border transition-all duration-200"
                    style={{ background: "var(--bg)", borderColor: "var(--border)" }}
                  >
                    <div
                      className="w-11 h-11 flex items-center justify-center shrink-0"
                      style={{ background: "var(--surface)", color: "var(--text-on-surface)" }}
                      aria-hidden="true"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.49 6.49l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--surface)" }}>437-265-4770</p>
                      <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-dmsans)" }}>Call or text &middot; Closes 7 PM daily</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-5 border" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
                    <div
                      className="w-11 h-11 flex items-center justify-center shrink-0"
                      style={{ background: "var(--bg-card)", color: "var(--text-secondary)" }}
                      aria-hidden="true"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-semibold" style={{ fontFamily: "var(--font-dmsans)", color: "var(--text-primary)" }}>9 Lipscott Dr, Caledon, ON L7C 4K7</p>
                      <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-dmsans)" }}>Serving Caledon · Brampton · Peel Region</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-5 border" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
                    <div
                      className="w-11 h-11 flex items-center justify-center shrink-0"
                      style={{ background: "var(--bg-card)", color: "var(--text-secondary)" }}
                      aria-hidden="true"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-semibold" style={{ fontFamily: "var(--font-dmsans)", color: "var(--text-primary)" }}>Hours</p>
                      <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-dmsans)" }}>Monday – Sunday &middot; Closes 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <iframe
                  title="SK Landscaping service area map"
                  width="100%"
                  height="420"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=9+Lipscott+Dr+Caledon+ON+Canada&output=embed"
                  aria-label="Map showing Caledon, Ontario — SK Landscaping's location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="py-10 border-t"
        style={{ background: "var(--bg)", borderColor: "var(--border)" }}
        aria-label="Footer"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-black text-base italic" style={{ fontFamily: "var(--font-playfair)", color: "var(--surface)" }}>
              SK Landscaping
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-dmsans)" }}>
              Caledon &middot; Brampton &middot; Peel Region &middot; 437-265-4770
            </p>
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-dmsans)" }}>
            &copy; {new Date().getFullYear()} SK Landscaping. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
