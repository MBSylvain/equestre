import React from "react";
import ActivityCard from "../components/ActivityCard";

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl text-center font-bold mb-8 text-blue-800">
        Activités
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ActivityCard
          title="Cours d'équitation classique"
          description="Nos cours d'équitation classique s'adressent à tous les âges et tous les niveaux, du débutant au cavalier confirmé. Encadrés par des moniteurs diplômés, vous apprendrez les bases de l'équitation, le dressage, le saut d'obstacles, et la relation avec le cheval dans une ambiance conviviale et sécurisée. Les séances sont adaptées à chaque élève pour garantir une progression personnalisée."
          image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
          link="/activites/classique"
        />
        <ActivityCard
          title="Cours d'équitation Western"
          description="Découvrez l'équitation Western, une discipline conviviale et accessible à tous, inspirée des traditions américaines. Apprenez le travail du bétail, le maniement du cheval en licol, les figures typiques (reining, trail, barrel racing) et profitez d'une approche ludique et détendue de l'équitation."
          image="https://images.unsplash.com/photo-1518715308788-327f6b0037a7?auto=format&fit=crop&w=400&q=80"
          link="/activites/western"
        />
        <ActivityCard
          title="Poney club"
          description="Le poney club accueille les enfants dès 3 ans pour des moments ludiques et pédagogiques : jeux, balades, soins et découverte du monde équestre en toute sécurité."
          image="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80"
          link="/activites/poney-club"
        />
        <ActivityCard
          title="Balades & randonnées"
          description="Partez à la découverte de la nature à cheval ou à poney ! Balades encadrées, randonnées à la demi-journée ou journée, pour tous niveaux et tous âges."
          image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
          link="/activites/balades"
        />
        <ActivityCard
          title="Concours"
          description="Participez à nos concours internes et officiels : saut d’obstacles, dressage, épreuves western. Ouverts à tous les cavaliers du club, du débutant au confirmé."
          image="https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80"
          link="/activites/concours"
        />
        <ActivityCard
          title="Examen fédéral"
          description="Préparez et passez vos examens fédéraux (Galops) au sein du club, encadré par nos moniteurs diplômés. Nous accompagnons chaque cavalier dans la progression et la réussite de ses objectifs officiels, du Galop 1 au Galop 7."
          image="https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80"
          link="/activites/examen-federal"
        />
      </div>
    </div>
  );
}
