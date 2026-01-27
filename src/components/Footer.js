import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 mt-8 text-white bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600">
      <div className="container flex flex-col items-center justify-between gap-3 px-4 mx-auto md:flex-row">
        {/* Bloc gauche : logo ou nom */}
        <div className="flex flex-col items-center mb-2 md:items-start md:mb-0">
          <div className="flex items-center gap-2 mb-1">
            <img src="/logo%20centre%20equestre.jpg" alt="Logo Centre Équestre" className="h-10 w-10 object-contain rounded-full border border-gray-200 bg-white" />
            <span className="text-xl font-bold tracking-wide">Centre Équestre</span>
          </div>
          <span className="text-xs text-blue-200">Vivez la passion du cheval</span>
        </div>
        {/* Bloc centre : contact */}
        <div className="flex flex-col items-center md:items-start">
          <span className="mb-1 text-sm font-semibold">Contact</span>
          <a href="mailto:contact@centreequestre.fr" className="text-xs text-blue-200 hover:underline">contact@centreequestre.fr</a>
          <span className="text-xs text-blue-200">06 12 34 56 78</span>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-1">
            <span className="text-xs text-blue-200">123 rue du Cheval, 75000 Paris</span>
            <span className="text-xs text-gray-200">Horaires : Lun-Dim 8h - 20h</span>
          </div>
        </div>
        {/* Bloc droit : réseaux sociaux et liens */}
        <div className="flex flex-col items-center gap-1 md:items-end">
          <div className="flex gap-2 mb-1">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808 2.256 6.088 2.243 6.497 2.243 12c0 5.503.013 5.912.072 7.192.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32 1.28.059 1.689.072 7.192.072s5.912-.013 7.192-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-7.192s-.013-5.912-.072-7.192c-.059-1.276-.353-2.449-1.32-3.416C21.551.425 20.378.131 19.102.072 17.822.013 17.413 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
          </div>
          <a href="https://www.ffe.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-200 hover:underline">Fédération Française d'Équitation</a>
        </div>
      </div>
      <div className="mt-3 text-xs text-center text-gray-300">
        © {new Date().getFullYear()} Centre Équestre. Tous droits réservés.
      </div>
    </footer>
  );
}
