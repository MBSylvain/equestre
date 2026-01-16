import React from "react";

export default function Hero() {
  return (
    <>
      <section
        className="relative py-20 mb-12 text-center flex items-center justify-center min-h-[350px] md:min-h-[450px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Vivez la passion équestre au cœur de la nature
          </h2>
          <p className="text-lg md:text-2xl mb-6 drop-shadow">
            Manège couvert, stages, compétitions et moments inoubliables pour
            petits et grands. Rejoignez notre communauté de cavaliers !
          </p>
          <a
            href="#activites"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition font-semibold mt-2"
          >
            Découvrir les activités
          </a>
        </div>
      </section>

      {/* Section Mini Ferme */}
      <section className="relative min-h-[500px] md:min-h-[650px] container mx-auto px-4 py-20 mb-12 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <img
            src="https://images.unsplash.com/photo-1508182314992-c323d4254e69?auto=format&fit=crop&w=500&q=80"
            alt="Chèvre à la mini ferme du centre équestre"
            className="w-full md:w-1/3 rounded-lg shadow-lg object-cover min-h-[200px] h-[200px] md:h-[350px] md:min-h-[350px]"
          />
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-green-900">
              Espace Mini Ferme
            </h3>
            <p className="text-lg text-green-800 mb-2">
              Découvrez notre mini ferme ! Les enfants et les familles peuvent
              approcher, nourrir et caresser nos animaux : chèvres, moutons,
              lapins, poules et bien d'autres. Un espace pédagogique et ludique
              pour tous les âges.
            </p>
            <a
              href="#mini-ferme"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition font-semibold mt-2"
            >
              En savoir plus sur la mini ferme
            </a>
          </div>
        </div>
      </section>

      {/* Section Buvette */}
      <section className="relative min-h-[500px] md:min-h-[650px] container mx-auto px-4 py-20 mb-12 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80"
            alt="Tasses de café à la buvette du centre équestre"
            className="w-full md:w-1/3 rounded-lg shadow-lg object-cover min-h-[200px] h-[200px] md:h-[350px] md:min-h-[350px]"
          />
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-yellow-900">
              La Buvette du Centre
            </h3>
            <p className="text-lg text-yellow-800 mb-2">
              Profitez d'un moment de détente à notre buvette ! Boissons
              fraîches, encas, café et espace convivial pour échanger après les
              activités ou pendant les événements du centre.
            </p>
            <a
              href="#buvette"
              className="inline-block bg-yellow-600 text-white px-4 py-2 rounded shadow hover:bg-yellow-700 transition font-semibold mt-2"
            >
              Découvrir la buvette
            </a>
          </div>
        </div>
      </section>
      {/* Section Moment en famille avec le poney club */}
      <section className="relative min-h-[500px] md:min-h-[650px] container mx-auto px-4 py-20 mb-12 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=500&q=80"
            alt="Moment en famille avec le poney club"
            className="w-full md:w-1/3 rounded-lg shadow-lg object-cover min-h-[200px] h-[200px] md:h-[350px] md:min-h-[350px]"
          />
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-pink-900">
              Un moment en famille avec le poney club
            </h3>
            <p className="text-lg text-pink-800 mb-2">
              Partagez des instants inoubliables en famille au poney club !
              Initiation, balades, jeux et complicité avec nos poneys, pour
              petits et grands. Un cadre sécurisé et convivial pour découvrir
              l’équitation ensemble et créer de beaux souvenirs.
            </p>
            <a
              href="#poney-club"
              className="inline-block bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700 transition font-semibold mt-2"
            >
              Découvrir le poney club
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
