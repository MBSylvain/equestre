import React from "react";

export default function BaladesPage() {
  return (
    <section className="min-h-[500px] md:min-h-[650px] flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80"
            alt="Balades et randonnées"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-green-900">
          Balades & randonnées
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          Partez à la découverte de la nature à cheval ou à poney ! Balades
          encadrées, randonnées à la demi-journée ou journée, pour tous niveaux
          et tous âges.
        </p>
        <ul className="mb-4 text-base text-gray-800 list-disc list-inside">
          <li>
            <span className="font-semibold">Prix :</span> 30€ la balade d’1h30 /
            50€ la demi-journée
          </li>
          <li>
            <span className="font-semibold">Âge :</span> à partir de 6 ans
          </li>
          <li>
            <span className="font-semibold">Formule :</span> Accueil,
            préparation, balade accompagnée, retour et soins
          </li>
          <li>
            <span className="font-semibold">Durée :</span> 1h30 à 4h selon
            formule
          </li>
          <li>
            <span className="font-semibold">Jours :</span> Sur réservation,
            week-end et vacances scolaires (hors jours fériés)
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          Tenue adaptée obligatoire. Groupes et familles bienvenus.
        </p>
      </div>
    </section>
  );
}
