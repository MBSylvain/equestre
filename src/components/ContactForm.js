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
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-gray-50 p-6 rounded shadow"
      >
        <h3 className="text-lg text-center font-semibold mb-4">
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
                className="w-full border rounded px-3 py-2"
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
                className="w-full border rounded px-3 py-2"
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
                className="w-full border rounded px-3 py-2 bg-white"
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
                className="w-full border rounded px-3 py-2"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Envoyer
            </button>
          </>
        )}
      </form>
      <div className="flex-1 bg-white/80 text-blue-900 rounded px-6 py-6 shadow text-base md:mt-0 mt-8">
        <div className="font-bold text-lg mb-2">
          Coordonnées du centre équestre
        </div>
        123 Chemin du Manège
        <br />
        75000 Paris
        <br />
        Tél : 01 23 45 67 89
        <br />
        <span className="block mt-2 text-gray-700">
          contact@centreequestre.fr
        </span>
        <span className="block mt-2 text-gray-600 text-sm">
          Parking gratuit, accès bus ligne 12, stationnement vélo.
        </span>
      </div>
    </div>
  );
}
