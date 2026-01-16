import React from "react";

const events = [
  { date: "2026-02-15", title: "Stage de dressage" },
  { date: "2026-03-10", title: "Compétition CSO" },
  { date: "2026-04-05", title: "Stage découverte poney" },
];

export default function Agenda() {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-8 text-blue-800 text-center">
        Agenda des stages et compétitions
      </h3>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-100 rounded"></div>
        <ul className="space-y-8">
          {events.map((event, idx) => (
            <li key={idx} className="relative flex items-center group">
              <div className="z-10 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full text-white font-bold shadow-lg border-4 border-white group-hover:bg-blue-800 transition">
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
                <div className="flex items-center mb-1">
                  <span className="font-semibold text-blue-700 mr-3 text-base md:text-lg">
                    {new Date(event.date).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                    {event.title.includes("Stage") ? "Stage" : "Compétition"}
                  </span>
                </div>
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
