import React from "react";

export default function LocationSalle() {
  return (
    <section
      className="relative py-20 mb-12 flex items-center justify-center min-h-[350px] md:min-h-[450px]"
      id="location"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
      <div className="relative z-10 container mx-auto px-4 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Location de salles
        </h2>
        <p className="mb-4 text-lg md:text-xl drop-shadow">
          Nous proposons la location de salles pour vos événements :
          anniversaires, séminaires, réunions, etc.
        </p>
        <ul className="list-disc list-inside mb-4 text-base md:text-lg mx-auto max-w-xl text-left text-white/90">
          <li>Salle équipée (tables, chaises, vidéoprojecteur)</li>
          <li>Capacité : jusqu'à 50 personnes</li>
          <li>Accès aux installations du centre</li>
        </ul>
        <p className="text-sm text-white/80">
          Pour plus d'informations ou réserver, contactez-nous via le
          formulaire.
        </p>
      </div>
    </section>
  );
}
