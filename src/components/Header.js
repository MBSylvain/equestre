import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container flex items-center justify-between px-4 py-6 mx-auto">
        <div className="flex items-center gap-3">
          <img src="/logo%20centre%20equestre.jpg" alt="Logo Centre Équestre" className="object-contain w-12 h-12 bg-white border border-gray-200 rounded-full" />
          <h1 className="text-2xl font-bold">Centre Équestre</h1>
        </div>
        <nav className="space-x-4">
          <Link
            to="/"
            className="px-2 py-1 font-medium transition-colors rounded hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Accueil
          </Link>
          <div className="relative inline-block group">
            <Link
              to="/activites"
              className="px-2 py-1 font-medium transition-colors rounded hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Activités
            </Link>
            <div className="absolute left-0 z-20 invisible w-48 mt-2 transition-opacity bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible">
              <Link
                to="/activites/classique"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                Équitation classique
              </Link>
              <Link
                to="/activites/western"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                Équitation western
              </Link>
              <Link
                to="/activites/poney-club"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                Poney club
              </Link>
              <Link
                to="/activites/balades"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                Balades & randonnées
              </Link>
              <Link
                to="/activites/concours"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                Concours
              </Link>
              <Link
                to="/activites/examen-federal"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                Examen fédéral
              </Link>
            </div>
          </div>
          <Link
            to="/equipe"
            className="px-2 py-1 font-medium transition-colors rounded hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            L'équipe
          </Link>
          <Link
            to="/agenda"
            className="px-2 py-1 font-medium transition-colors rounded hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Agenda
          </Link>
          <Link
            to="/galerie"
            className="px-2 py-1 font-medium transition-colors rounded hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Galerie
          </Link>
          <Link
            to="/location"
            className="px-2 py-1 font-medium transition-colors rounded hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Location de salles
          </Link>
          <Link
            to="/infos"
            className="px-2 py-1 font-medium transition-colors rounded hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Infos pratiques
          </Link>
          <Link
            to="/contact"
            className="px-2 py-1 font-medium transition-colors rounded hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
