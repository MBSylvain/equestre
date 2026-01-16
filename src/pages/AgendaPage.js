import React from "react";
import Agenda from "../components/Agenda";

export default function AgendaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 text-blue-800">Agenda</h1>
      <Agenda />
    </div>
  );
}
