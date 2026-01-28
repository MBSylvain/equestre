import React from "react";

export default function EquipePage() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-900">
        L'équipe du centre équestre
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Fondateur */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=300&q=80"
            alt="Fondateur du club"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">Jean Dupont</h2>
          <div className="text-blue-700 font-medium mb-2">
            Fondateur & Directeur
          </div>
          <p className="text-gray-700 text-center">
            Cavalier passionné, Jean a fondé le club en 1995. Il veille à la
            qualité de l’accueil, à la sécurité et à la convivialité du centre.
          </p>
        </div>
        {/* Professeur classique */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80"
            alt="Professeur d'équitation classique"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">Sophie Martin</h2>
          <div className="text-green-700 font-medium mb-2">
            Monitrice équitation classique
          </div>
          <p className="text-gray-700 text-center">
            Diplômée d’État, Sophie enseigne le dressage, le saut d’obstacles et
            accompagne les cavaliers dans leur progression.
          </p>
        </div>
        {/* Professeur western */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80"
            alt="Professeur d'équitation western"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">Paul Leroy</h2>
          <div className="text-yellow-700 font-medium mb-2">
            Moniteur équitation western
          </div>
          <p className="text-gray-700 text-center">
            Spécialiste de la monte américaine, Paul propose des cours ludiques
            et adaptés à tous les niveaux.
          </p>
        </div>
        {/* Administration */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80"
            alt="Administration du club"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">Claire Dubois</h2>
          <div className="text-pink-700 font-medium mb-2">
            Responsable administrative
          </div>
          <p className="text-gray-700 text-center">
            Claire gère les inscriptions, la communication et l’organisation des
            événements du club.
          </p>
        </div>
        {/* Palefrenier */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80"
            alt="Palefrenier du club"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">Lucas Bernard</h2>
          <div className="text-purple-700 font-medium mb-2">Palefrenier</div>
          <p className="text-gray-700 text-center">
            Lucas veille au bien-être des chevaux et à l’entretien quotidien des
            installations.
          </p>
        </div>
        {/* Animatrice poney club */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
            alt="Animatrice poney club"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">Emma Rousseau</h2>
          <div className="text-orange-700 font-medium mb-2">
            Animatrice poney club
          </div>
          <p className="text-gray-700 text-center">
            Emma encadre les plus jeunes cavaliers et anime les ateliers
            découverte autour du poney.
          </p>
        </div>
      </div>
    </section>
  );
}
