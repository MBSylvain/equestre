import React from "react";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 text-blue-800">Galerie photos</h1>
      <Gallery />
    </div>
  );
}
