import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0 text-lg">
          <a
            href="https://www.ffe.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mr-4"
          >
            Fédération Française d'Équitation
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Facebook
          </a>
        </div>
        <div className="text-base text-gray-500">
          © {new Date().getFullYear()} Centre Équestre. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
