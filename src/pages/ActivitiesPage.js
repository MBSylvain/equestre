import React from "react";
import ActivityCard from "../components/ActivityCard";

export default function ActivitiesPage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-2xl font-bold text-center text-blue-800">
        Activités
      </h1>
      <div className="grid grid-cols-1 gap-3 mb-8 md:grid-cols-3">
        <ActivityCard
          title="Cours d'équitation classique"
          description="Nos cours d'équitation classique s'adressent à tous les âges et tous les niveaux, du débutant au cavalier confirmé. Encadrés par des moniteurs diplômés, vous apprendrez les bases de l'équitation, le dressage, le saut d'obstacles, et la relation avec le cheval dans une ambiance conviviale et sécurisée. Les séances sont adaptées à chaque élève pour garantir une progression personnalisée."
          image="/engin-akyurt-Q5irDBV8iGs-unsplash.jpg"
          link="/activites/classique"
        />
        <ActivityCard
          title="Cours d'équitation Western"
          description="Découvrez l'équitation Western, une discipline conviviale et accessible à tous, inspirée des traditions américaines. Apprenez le travail du bétail, le maniement du cheval en licol, les figures typiques (reining, trail, barrel racing) et profitez d'une approche ludique et détendue de l'équitation."
          image="/beth-macdonald-7Y8gfWM-1dw-unsplash.jpg"
          link="/activites/western"
        />
        <ActivityCard
          title="Poney club"
          description="Le poney club accueille les enfants dès 3 ans pour des moments ludiques et pédagogiques : jeux, balades, soins et découverte du monde équestre en toute sécurité."
          image="/louise-pilgaard-3SM_F21nzSw-unsplash.jpg"
          link="/activites/poney-club"
        />
        <ActivityCard
          title="Balades & randonnées"
          description="Partez à la découverte de la nature à cheval ou à poney ! Balades encadrées, randonnées à la demi-journée ou journée, pour tous niveaux et tous âges."
          image="/Balade%20equestre.jpg"
          link="/activites/balades"
        />
        <ActivityCard
          title="Concours"
          description="Participez à nos concours internes et officiels : saut d’obstacles, dressage, épreuves western. Ouverts à tous les cavaliers du club, du débutant au confirmé."
          image="/compétitoin.png"
          link="/activites/concours"
        />
        <ActivityCard
          title="Examen fédéral"
          description="Préparez et passez vos examens fédéraux (Galops) au sein du club, encadré par nos moniteurs diplômés. Nous accompagnons chaque cavalier dans la progression et la réussite de ses objectifs officiels, du Galop 1 au Galop 7."
          image="/filip-eliasson-qaF4IhTuZv0-unsplash.jpg"
          link="/activites/examen-federal"
        />
      </div>
    </div>
  );
}
