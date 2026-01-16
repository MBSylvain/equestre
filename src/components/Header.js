import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow bg-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Centre Équestre</h1>
        <nav className="space-x-4">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Accueil
          </Link>
          <div className="relative group inline-block">
            <Link
              to="/activites"
              className="hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Activités
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity z-20">
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
            to="/galerie"
            className="hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Galerie
          </Link>
          <Link
            to="/equipe"
            className="hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            L'équipe
          </Link>
          <Link
            to="/location"
            className="hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Location de salles
          </Link>
          <Link
            to="/infos"
            className="hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Infos pratiques
          </Link>
          <Link
            to="/agenda"
            className="hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Agenda
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
