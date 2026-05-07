"use client";

import Image from "next/image";

const photos = [
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGNYvvAW-2UKth3SHxRMQc99xWc2GX8s397v3zP8uUZxa8R7A2Sn9PNgxJVTi1raESet9p_ZeE-n_O7hrq8p94hB9kz_O8AOIc5FdAVPtMtZHz-XXttVc8HBnvxG8nhxYWElwtbSOMJ5xEC=w800-h600-k-no",
    alt: "SK Landscaping project — lawn care and landscaping work",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHvcDgUm8x2s3HJpXGSFkN3Zo9xxW_Xc5yZGdOvmhilIE8hhmHbp-Zwh5l5ljNv9uuESi-rM4pzIFIuAzA4WcvbgWO2QVjfLjcorWkMFTs3pczqtZ9svoqpzVjcv5Nnr2K1lolEOlXNGUUM4c=w800-h600-k-no",
    alt: "SK Landscaping project — seasonal landscaping",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF70FIFGTC-1QSUuB_KHzi65eC9VzwyItIUlRyfImz9mQnQbYCVmc6kLlTNgLwQsDPJKL9kSCqlvqtZwIljOE_rHqFtuv4XmWsIuagtUQ4yB4Fvmd8QwL_Qjubcny_Mwzou3PS4abJ8l0_0=w800-h600-k-no",
    alt: "SK Landscaping project — lawn and garden work",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEynmcW4CYR-xmdK6UqmXjO2E6gveLGjH_xGrIwVZb4LsuCheuhyPp95t7SeaFs3PIwQVTmrYiA1_i8TLEttx0K48D8iFIlC2E_w-QqkbiwNLLiJB84lphPUcFjLZFPmxgfxobj=w800-h600-k-no",
    alt: "SK Landscaping project — outdoor transformation",
  },
];

export default function ImageMarquee() {
  // Duplicate for seamless loop
  const allPhotos = [...photos, ...photos];

  return (
    <div className="overflow-hidden" aria-label="Photo gallery of SK Landscaping projects">
      <div className="flex gap-4 marquee-track" style={{ width: "max-content" }}>
        {allPhotos.map((photo, i) => (
          <div
            key={i}
            className="relative shrink-0 overflow-hidden"
            style={{ width: "360px", height: "260px" }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="360px"
              loading={i < 4 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
