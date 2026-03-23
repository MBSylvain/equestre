import React from "react";

export default function Hero() {
  return (
    <>
      <section
        className="relative py-20 mb-12 text-center flex items-center justify-center min-h-[350px] md:min-h-[450px]"
        style={{
          backgroundImage: "url('/Balade equestre.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <div className="container relative z-10 px-4 mx-auto text-white">
          <h2 className="mb-4 text-3xl font-extrabold md:text-5xl drop-shadow-lg">
            Vivez la passion équestre au cœur de votre centre équestre
          </h2>
          <p className="mb-6 text-lg md:text-2xl drop-shadow">
            Manège couvert, stages, compétitions et moments inoubliables pour
            petits et grands. Rejoignez notre communauté de cavaliers !
          </p>
          <a
            href="#activites"
            className="inline-block px-4 py-2 mt-2 font-semibold text-white transition bg-blue-600 rounded shadow hover:bg-blue-700"
          >
            Découvrir les activités
          </a>
        </div>
      </section>
      {/* phrase d'appel */}
      <section className="container px-4 py-10 mx-auto mb-8">
        <h3 className="mb-4 text-2xl font-semibold text-center text-gray-800">
          Un centre équestre pour tous : passionnés, débutants et familles
        </h3>
        <p className="max-w-2xl mx-auto text-center text-gray-600">
          Que vous soyez cavalier confirmé, débutant ou en famille, notre centre
          équestre vous accueille dans un cadre convivial et sécurisé. Profitez
          de nos installations modernes, de nos activités variées et de notre
          équipe passionnée pour vivre pleinement votre passion du cheval.
        </p>
      </section>

      {/* Cards thématiques */}
      <section className="container px-4 py-10 mx-auto mb-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Mini Ferme */}
          <div className="flex flex-col items-center p-6 transition bg-white shadow-lg rounded-xl hover:shadow-2xl">
            <div className="relative flex items-center justify-center w-full h-40 mb-4">
              <img
                src="/miniferme.png"
                alt="Mini ferme du centre équestre"
                className="object-cover w-full h-full border-4 border-green-200 rounded-lg"
              />
              <span className="absolute p-2 text-white bg-green-600 rounded-full shadow-md top-2 left-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-green-900">
              Espace Mini Ferme
            </h3>
            <p className="mb-4 text-base text-green-800">
              Découvrez notre mini ferme ! Les enfants et les familles peuvent
              approcher, nourrir et caresser nos animaux : chèvres, moutons,
              lapins, poules et bien d'autres. Un espace pédagogique et ludique
              pour tous les âges.
            </p>
            <a
              href="#mini-ferme"
              className="inline-block px-4 py-2 font-semibold text-white transition bg-green-600 rounded shadow hover:bg-green-700"
            >
              En savoir plus
            </a>
          </div>
          {/* Buvette */}
          <div className="flex flex-col items-center p-6 transition shadow-lg bg-gray-50 rounded-xl hover:shadow-2xl">
            <div className="relative flex items-center justify-center w-full h-40 mb-4">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80"
                alt="Tasses de café à la buvette du centre équestre"
                className="object-cover w-full h-full border-4 border-yellow-200 rounded-lg"
              />
              <span className="absolute p-2 text-white bg-yellow-500 rounded-full shadow-md top-2 left-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-6h6v6m-3-6V7m0 0a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-yellow-900">
              La Buvette du Centre
            </h3>
            <p className="mb-4 text-base text-yellow-800">
              Profitez d'un moment de détente à notre buvette ! Boissons
              fraîches, encas, café et espace convivial pour échanger après les
              activités ou pendant les événements du centre.
            </p>
            <a
              href="#buvette"
              className="inline-block px-4 py-2 font-semibold text-white transition bg-yellow-600 rounded shadow hover:bg-yellow-700"
            >
              Découvrir la buvette
            </a>
          </div>
          {/* Poney club */}
          <div className="flex flex-col items-center p-6 transition bg-white shadow-lg rounded-xl hover:shadow-2xl">
            <div className="relative flex items-center justify-center w-full h-40 mb-4">
              <img
                src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=500&q=80"
                alt="Moment en famille avec le poney club"
                className="object-cover w-full h-full border-4 border-pink-200 rounded-lg"
              />
              <span className="absolute p-2 text-white bg-pink-500 rounded-full shadow-md top-2 left-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-pink-900">
              Un moment en famille avec le poney club
            </h3>
            <p className="mb-4 text-base text-pink-800">
              Partagez des instants inoubliables en famille au poney club !
              Initiation, balades, jeux et complicité avec nos poneys, pour
              petits et grands. Un cadre sécurisé et convivial pour découvrir
              l’équitation ensemble et créer de beaux souvenirs.
            </p>
            <a
              href="#poney-club"
              className="inline-block px-4 py-2 font-semibold text-white transition bg-pink-600 rounded shadow hover:bg-pink-700"
            >
              Découvrir le poney club
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
