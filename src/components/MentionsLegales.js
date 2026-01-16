import React from "react";

export default function MentionsLegales() {
  return (
    <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow mt-8">
      <h3 className="text-lg font-semibold mb-4">
        Mentions légales & Politique de confidentialité
      </h3>
      <p className="mb-2 text-sm text-gray-700">
        Ceci est un site témoin pour un centre équestre. Les informations
        présentées sont fictives et à titre d’exemple. Pour toute question,
        contactez le responsable du site.
      </p>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Centre Équestre. Tous droits réservés.
      </p>
    </div>
  );
}
