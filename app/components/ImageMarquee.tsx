"use client";

import Image from "next/image";

const photos = [
  {
    src: "/images/photo1.jpg",
    alt: "SK Landscaping project — lawn care and landscaping work",
  },
  {
    src: "/images/photo1.jpg",
    alt: "SK Landscaping project — seasonal landscaping",
  },
  {
    src: "/images/photo1.jpg",
    alt: "SK Landscaping project — lawn and garden work",
  },
  {
    src: "/images/photo1.jpg",
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
