import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    activite: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="flex flex-col items-start max-w-4xl gap-8 mx-auto md:flex-row">
      <form
        onSubmit={handleSubmit}
        className="flex-1 p-6 rounded shadow bg-gray-50"
      >
        <h3 className="mb-4 text-lg font-semibold text-center">
          Formulaire de contact
        </h3>
        {sent ? (
          <div className="text-green-600">Votre message a été envoyé !</div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Nom</label>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Activité concernée
              </label>
              <select
                name="activite"
                value={form.activite}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-white border rounded"
              >
                <option value="">-- Sélectionnez une activité --</option>
                <option value="classique">Équitation classique</option>
                <option value="western">Équitation western</option>
                <option value="poney-club">Poney club</option>
                <option value="balades">Balades & randonnées</option>
                <option value="concours">Concours</option>
                <option value="examen-federal">Examen fédéral</option>
                <option value="autre">Autre / Information générale</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Envoyer
            </button>
          </>
        )}
      </form>
      <div className="flex flex-col items-center flex-1 px-6 py-6 mt-8 text-base text-blue-900 rounded shadow bg-white/80 md:mt-0">
        <img src="/logo%20centre%20equestre.jpg" alt="Logo Centre Équestre" className="object-contain mb-3 bg-white border border-gray-200 rounded-full h-14 w-14" />
        <div className="mb-2 text-lg font-bold text-center">
          Coordonnées du centre équestre
        </div>
        <div className="text-center">
          123 Chemin du Manège
          <br />
          75000 Paris
          <br />
          Tél : 01 23 45 67 89
          <br />
          <span className="block mt-2 text-gray-700">
            contact@centreequestre.fr
          </span>
          <span className="block mt-2 text-sm text-gray-600">
            Parking gratuit, accès bus ligne 12, stationnement vélo.
          </span>
        </div>
      </div>
    </div>
  );
}
