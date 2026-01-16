import React from "react";

export default function ExamenFederalPage() {
  return (
    <section className="min-h-[500px] md:min-h-[650px] flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80"
            alt="Examen fédéral"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-indigo-900">
          Examen fédéral
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          Préparez et passez vos examens fédéraux (Galops) au sein du club,
          accompagnés par nos moniteurs diplômés. Sessions régulières pour tous
          niveaux.
        </p>
        <ul className="mb-4 text-base text-gray-800 list-disc list-inside">
          <li>
            <span className="font-semibold">Prix :</span> 35€ la session (hors
            frais FFE)
          </li>
          <li>
            <span className="font-semibold">Âge :</span> à partir de 6 ans
            (selon niveau)
          </li>
          <li>
            <span className="font-semibold">Formule :</span> Accueil, révision
            théorique, préparation pratique, passage de l’examen
          </li>
          <li>
            <span className="font-semibold">Durée :</span> 2h à 3h selon niveau
          </li>
          <li>
            <span className="font-semibold">Jours :</span> Samedi ou dimanche
            (selon calendrier, hors vacances scolaires et jours fériés)
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          Inscription obligatoire. Certificat médical et licence FFE à jour
          requis.
        </p>
      </div>
    </section>
  );
}
