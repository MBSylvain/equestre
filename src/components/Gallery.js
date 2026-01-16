import React, { useState } from "react";

const allImages = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    style: "western",
  },
  {
    src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
    style: "classique",
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    style: "concours",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    style: "classique",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    style: "western",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    style: "concours",
  },
  {
    src: "https://images.unsplash.com/photo-1518715308788-327f6b0037a7?auto=format&fit=crop&w=400&q=80",
    style: "western",
  },
  {
    src: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80",
    style: "classique",
  },
  {
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    style: "concours",
  },
  {
    src: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    style: "western",
  },
  {
    src: "https://images.unsplash.com/photo-1518715308788-327f6b0037a7?auto=format&fit=crop&w=400&q=80",
    style: "classique",
  },
  {
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    style: "concours",
  },
];

const styles = [
  { label: "Tous", value: "all" },
  { label: "Western", value: "western" },
  { label: "Classique", value: "classique" },
  { label: "Concours", value: "concours" },
];

export default function Gallery({ images }) {
  const [filter, setFilter] = useState("all");
  const galleryImages = images
    ? images.map((src, idx) => ({ src, style: "all" }))
    : allImages;
  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.style === filter);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Galerie photos</h3>
      <div className="mb-4 flex flex-wrap gap-2">
        {styles.map((s) => (
          <button
            key={s.value}
            onClick={() => setFilter(s.value)}
            className={`px-4 py-2 rounded border text-sm font-medium transition-colors ${
              filter === s.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`Galerie ${idx + 1}`}
            className="rounded shadow object-cover w-full h-48"
          />
        ))}
      </div>
    </div>
  );
}
