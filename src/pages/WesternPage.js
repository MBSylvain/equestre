import React from "react";

export default function WesternPage() {
  return (
    <section className="min-h-[500px] md:min-h-[650px] flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80"
            alt="Équitation western"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-yellow-900">
          Équitation western
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          Initiez-vous à l’équitation western, ambiance Far West garantie !
          Travail du bétail, maniabilité, jeux et découverte de la monte
          américaine pour tous niveaux.
        </p>
        <ul className="mb-4 text-base text-gray-800 list-disc list-inside">
          <li>
            <span className="font-semibold">Prix :</span> 28€ la séance / 250€
            le trimestre
          </li>
          <li>
            <span className="font-semibold">Âge :</span> à partir de 10 ans
          </li>
          <li>
            <span className="font-semibold">Formule :</span> Accueil,
            préparation western, cours en carrière, retour et soins
          </li>
          <li>
            <span className="font-semibold">Durée :</span> 1h30 (dont 1h à
            cheval)
          </li>
          <li>
            <span className="font-semibold">Jours :</span> Samedi après-midi,
            dimanche matin (hors jours fériés et vacances scolaires)
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          Réservation obligatoire. Tenue western conseillée, matériel fourni.
        </p>
      </div>
    </section>
  );
}
