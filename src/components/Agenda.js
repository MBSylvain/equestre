import React from "react";

const balades = [
  { date: "2026-02-20", title: "Balade en forêt débutants" },
  { date: "2026-03-15", title: "Balade coucher de soleil" },
];

const stages = [
  { date: "2026-02-15", title: "Stage de dressage" },
  { date: "2026-04-05", title: "Stage découverte poney" },
  { date: "2026-05-12", title: "Stage perfectionnement obstacle" },
];

const competitions = [
  { date: "2026-03-10", title: "Compétition CSO" },
  { date: "2026-06-01", title: "Concours interne club" },
];

// Planning par tranches horaires d'une heure, plusieurs cours possibles en même temps
const joursSemaine = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
const tranchesHoraires = [
  "09h00-10h00",
  "10h00-11h00",
  "11h00-12h00",
  "14h00-15h00",
  "15h00-16h00",
  "16h00-17h00",
  "17h00-18h00",
  "18h00-19h00",
];

const planningCours = {
  Lundi: {
    "18h00-19h00": ["Classique Adultes Débutants", "Western Enfants"],
  },
  Mardi: {
    "17h00-18h00": ["Classique Enfants Intermédiaires"],
    "18h00-19h00": ["Western Adultes Confirmés"],
  },
  Mercredi: {
    "14h00-15h00": ["Classique Enfants Débutants", "Western Découverte"],
    "15h00-16h00": ["Classique Enfants Confirmés"],
  },
  Jeudi: {
    "18h00-19h00": ["Western Adultes Débutants"],
  },
  Vendredi: {
    "18h00-19h00": ["Classique Adultes Confirmés", "Western Tous niveaux"],
  },
  Samedi: {
    "09h00-10h00": ["Classique Enfants"],
    "10h00-11h00": ["Western Enfants"],
    "11h00-12h00": ["Classique Adultes"],
    "14h00-15h00": ["Western Découverte"],
  },
  Dimanche: {
    "10h00-11h00": ["Balade encadrée"],
    "11h00-12h00": ["Classique Tous niveaux"],
  },
};

function Agenda() {
  return (
    <div className="mb-8 space-y-16">
      {/* Planning hebdomadaire des cours */}
      <SectionAgendaPlanning
        title="Planning des cours de la semaine"
        color="bg-indigo-600"
        jours={joursSemaine}
        horaires={tranchesHoraires}
        planning={planningCours}
      />
      {/* Balades */}
      <SectionAgenda
        title="Balades à cheval"
        color="bg-green-600"
        events={balades}
        type="date"
      />
      {/* Stages */}
      <SectionAgenda
        title="Stages"
        color="bg-blue-600"
        events={stages}
        type="date"
      />
      {/* Compétitions */}
      <SectionAgenda
        title="Compétitions"
        color="bg-red-600"
        events={competitions}
        type="date"
      />
    </div>
  );
}

export default Agenda;

function SectionAgendaPlanning({ title, color, jours, horaires, planning }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 text-blue-800 text-center">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow border border-blue-100">
          <thead>
            <tr>
              <th className="px-4 py-2 text-blue-700 text-center">Horaire</th>
              {jours.map((jour) => (
                <th key={jour} className="px-4 py-2 text-blue-700 text-center">
                  {jour}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horaires.map((horaire) => (
              <tr key={horaire} className="border-t">
                <td className="px-4 py-2 font-semibold text-center">
                  {horaire}
                </td>
                {jours.map((jour) => (
                  <td key={jour} className="px-4 py-2 text-center align-top">
                    {planning[jour] && planning[jour][horaire] ? (
                      planning[jour][horaire].map((cours, idx) => (
                        <div
                          key={idx}
                          className="mb-1 px-2 py-1 rounded bg-indigo-50 text-indigo-800 text-xs font-medium inline-block"
                        >
                          {cours}
                        </div>
                      ))
                    ) : (
                      <span className="text-gray-300">-</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionAgenda({ title, color, events, type }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 text-blue-800 text-center">
        {title}
      </h3>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-100 rounded"></div>
        <ul className="space-y-8">
          {events.map((event, idx) => (
            <li key={idx} className="relative flex items-center group">
              <div
                className={`z-10 w-8 h-8 flex items-center justify-center ${color} rounded-full text-white font-bold shadow-lg border-4 border-white group-hover:scale-110 transition`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-12 bg-white rounded shadow p-4 w-full border border-blue-100 group-hover:border-blue-300 transition">
                {type === "date" ? (
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-blue-700 mr-3 text-base md:text-lg">
                      {new Date(event.date).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {title}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-blue-700 mr-3 text-base md:text-lg">
                      {event.day}{" "}
                      {event.time && (
                        <span className="text-gray-500 ml-2">{event.time}</span>
                      )}
                    </span>
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {title}
                    </span>
                  </div>
                )}
                <div className="text-gray-700 text-sm md:text-base">
                  {event.title}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
