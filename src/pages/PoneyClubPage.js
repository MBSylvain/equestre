import React from "react";

export default function PoneyClubPage() {
  return (
    <section className="min-h-[500px] md:min-h-[650px] flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80"
            alt="Poney club"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-pink-900">Poney club</h1>
        <p className="mb-4 text-lg text-gray-700">
          Le poney club accueille les enfants dès 3 ans pour des moments
          ludiques et pédagogiques : jeux, balades, soins et découverte du monde
          équestre en toute sécurité.
        </p>
        <ul className="mb-4 text-base text-gray-800 list-disc list-inside">
          <li>
            <span className="font-semibold">Prix :</span> 18€ la séance / 160€
            le trimestre
          </li>
          <li>
            <span className="font-semibold">Âge :</span> de 3 à 10 ans
          </li>
          <li>
            <span className="font-semibold">Formule :</span> Accueil, pansage,
            jeux à poney, balade, goûter
          </li>
          <li>
            <span className="font-semibold">Durée :</span> 1h (dont 30 min à
            poney)
          </li>
          <li>
            <span className="font-semibold">Jours :</span> Mercredi, samedi,
            dimanche matin (hors jours fériés et vacances scolaires)
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          Réservation conseillée. Casque fourni, bottes recommandées.
        </p>
      </div>
    </section>
  );
}
