import React from "react";

export default function ConcoursPage() {
  return (
    <section className="min-h-[500px] md:min-h-[650px] flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=900&q=80"
            alt="Concours équestres"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-purple-900">Concours</h1>
        <p className="mb-4 text-lg text-gray-700">
          Participez à nos concours internes et officiels : saut d’obstacles,
          dressage, épreuves western. Ouverts à tous les cavaliers du club, du
          débutant au confirmé.
        </p>
        <ul className="mb-4 text-base text-gray-800 list-disc list-inside">
          <li>
            <span className="font-semibold">Prix :</span> 20€ par épreuve (tarif
            adhérent)
          </li>
          <li>
            <span className="font-semibold">Âge :</span> à partir de 8 ans
          </li>
          <li>
            <span className="font-semibold">Formule :</span> Accueil,
            reconnaissance du parcours, préparation, passage à cheval, remise
            des prix
          </li>
          <li>
            <span className="font-semibold">Durée :</span> Selon planning de la
            journée
          </li>
          <li>
            <span className="font-semibold">Jours :</span> Dimanche (selon
            calendrier, hors vacances scolaires et jours fériés)
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          Licence FFE obligatoire pour les concours officiels. Inscription
          préalable requise.
        </p>
      </div>
    </section>
  );
}
