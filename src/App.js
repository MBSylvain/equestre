import EquipePage from "./pages/EquipePage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ActivitiesPage from "./pages/ActivitiesPage";
import ClassiquePage from "./pages/ClassiquePage";
import WesternPage from "./pages/WesternPage";
import PoneyClubPage from "./pages/PoneyClubPage";
import BaladesPage from "./pages/BaladesPage";
import ConcoursPage from "./pages/ConcoursPage";
import ExamenFederalPage from "./pages/ExamenFederalPage";
import GalleryPage from "./pages/GalleryPage";
import LocationSallePage from "./pages/LocationSallePage";
import InfosPratiquesPage from "./pages/InfosPratiquesPage";
import AgendaPage from "./pages/AgendaPage";
import ContactPage from "./pages/ContactPage";
import MentionsLegales from "./components/MentionsLegales";

import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                </>
              }
            />
            <Route path="/activites" element={<ActivitiesPage />} />
            <Route path="/activites/classique" element={<ClassiquePage />} />
            <Route path="/activites/western" element={<WesternPage />} />
            <Route path="/activites/poney-club" element={<PoneyClubPage />} />
            <Route path="/activites/balades" element={<BaladesPage />} />
            <Route path="/activites/concours" element={<ConcoursPage />} />
            <Route
              path="/activites/examen-federal"
              element={<ExamenFederalPage />}
            />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/location" element={<LocationSallePage />} />
            <Route path="/infos" element={<InfosPratiquesPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mentions" element={<MentionsLegales />} />
            <Route path="/equipe" element={<EquipePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
