import React, { useState } from "react";

const allImages = [
  { src: "https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg", style: "western" },
  { src: "https://images.pexels.com/photos/209067/pexels-photo-209067.jpeg", style: "classique" },
  { src: "https://images.pexels.com/photos/162203/horse-animal-nature-mammal-162203.jpeg", style: "concours" },
  { src: "https://images.pexels.com/photos/216883/pexels-photo-216883.jpeg", style: "western" },
  { src: "https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg", style: "classique" },
  { src: "https://cdn.pixabay.com/photo/2017/01/20/00/30/horse-1995595_1280.jpg", style: "concours" },
  { src: "https://cdn.pixabay.com/photo/2015/03/26/09/54/horse-690588_1280.jpg", style: "western" },
  { src: "https://cdn.pixabay.com/photo/2016/11/29/09/32/animal-1867127_1280.jpg", style: "classique" },
  { src: "https://cdn.pixabay.com/photo/2017/02/20/18/03/horse-2088277_1280.jpg", style: "concours" },
  { src: "https://cdn.pixabay.com/photo/2016/03/23/18/25/horse-1274361_1280.jpg", style: "western" },
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
      <h3 className="mb-4 text-lg font-semibold">Galerie photos</h3>
      <div className="flex flex-wrap gap-2 mb-4">
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`Galerie ${idx + 1}`}
            className="object-cover w-full h-48 rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}
