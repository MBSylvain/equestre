import React from "react";

export default function InfosPratiques() {
  return (
    <section className="mb-12" id="infos">
      <h2 className="text-xl font-semibold mb-8">Infos pratiques</h2>

      {/* Section Comment venir au centre */}
      <div className="mb-10 rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-2 text-blue-800">
          Comment venir au centre ?
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li>
            <span className="font-semibold">En voiture :</span> Parking gratuit
            sur place, accès facile depuis la D123, suivre les panneaux "Centre
            Équestre".
          </li>
          <li>
            <span className="font-semibold">En transports en commun :</span> Bus
            ligne 12, arrêt "Manège" à 200m du centre. Métro ligne 8, station
            "Équitation" puis 10 min à pied.
          </li>
          <li>
            <span className="font-semibold">À vélo :</span> Stationnement vélo
            sécurisé à l’entrée du centre.
          </li>
          <li>
            <span className="font-semibold">À pied :</span> Accès piéton balisé
            depuis le centre-ville (15 min de marche).
          </li>
        </ul>
        <p className="text-sm text-gray-600">
          Pour toute question sur l’accessibilité, contactez-nous !
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Infos générales + carte */}
        <div>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Adresse :</strong> 123 Chemin du Manège, 75000 Paris
            </li>
            <li>
              <strong>Contact :</strong> 01 23 45 67 89
            </li>
            <li>
              <strong>Accès :</strong> Parking gratuit, accès bus ligne 12
            </li>
            <li>
              <strong>Tarifs :</strong> Voir sur place ou nous contacter
            </li>
          </ul>
          <div className="rounded shadow overflow-hidden">
            <iframe
              title="Plan d'accès club équestre"
              src="https://www.google.com/maps?q=123+Chemin+du+Manège,+75000+Paris&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Horaires détaillés */}
        <div>
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Horaires d'ouverture
            </h3>
            <ul className="divide-y divide-gray-200 text-gray-800">
              <li className="flex justify-between py-2">
                <span>Lundi</span>
                <span>8h - 20h</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Mardi</span>
                <span>8h - 20h</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Mercredi</span>
                <span>8h - 20h</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Jeudi</span>
                <span>8h - 20h</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Vendredi</span>
                <span>8h - 20h</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Samedi</span>
                <span>8h - 20h</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Dimanche</span>
                <span>8h - 20h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
