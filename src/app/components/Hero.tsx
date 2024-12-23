export function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <img
        src="/hero-image"
        alt="Femmes sénégalaises"
        className="absolute object-cover w-full h-full"
        width={10}
        height={10}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-orange-800/40" />
      <div className="container relative flex items-center h-full px-4 mx-auto">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 text-5xl font-bold">
            Autonomiser les femmes au Sénégal
          </h1>
          <p className="mb-8 text-xl">
            Ensemble, construisons un avenir meilleur à travers
            l&apos;éducation, l&apos;entrepreneuriat et le développement
            communautaire.
          </p>
          <button className="px-8 py-3 text-lg font-semibold text-white transition-colors duration-200 bg-orange-500 rounded-full hover:bg-orange-600">
            Découvrir nos projets
          </button>
        </div>
      </div>
    </div>
  );
}
