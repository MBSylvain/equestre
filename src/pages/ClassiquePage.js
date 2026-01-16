import React from "react";

export default function ClassiquePage() {
  return (
    <section className="min-h-[500px] md:min-h-[650px] flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
            alt="Équitation classique"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Équitation classique
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          Découvrez l’équitation classique, discipline fondatrice du centre,
          accessible à tous niveaux. Apprentissage des bases, dressage, saut
          d’obstacles, et perfectionnement dans une ambiance conviviale.
        </p>
        <ul className="mb-4 text-base text-gray-800 list-disc list-inside">
          <li>
            <span className="font-semibold">Prix :</span> 25€ la séance / 220€
            le trimestre
          </li>
          <li>
            <span className="font-semibold">Âge :</span> à partir de 8 ans
          </li>
          <li>
            <span className="font-semibold">Formule :</span> Accueil,
            préparation de la monture, cours en carrière ou manège, retour et
            soins
          </li>
          <li>
            <span className="font-semibold">Durée :</span> 1h30 (dont 1h à
            cheval)
          </li>
          <li>
            <span className="font-semibold">Jours :</span> Mercredi, samedi,
            dimanche (hors jours fériés et vacances scolaires)
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          Inscription et réservation obligatoires. Matériel fourni, tenue
          adaptée recommandée.
        </p>
      </div>
    </section>
  );
}
