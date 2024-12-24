import { Briefcase, GraduationCap, HeartHandshake } from "lucide-react";
import { HeroSection } from "../components/HeroSection";
import { ProjectCard } from "../components/ProjectCard";
import { StatCard } from "../components/StatCard";
import { YouTubeVideo } from "../components/YoutubeVideo";

export function NosActions() {
  const projects = [
    {
      title: "Production maraîchère",
      description:
        "Culture des légumes à partir des techniques agro-écologique pour garantir la santé des populations et la préservation de l'environnement",
      image: "transformations.jpg",
      stats: "",
    },
    {
      title: "Transformation de céréales",
      description:
        "Formation aux techniques de transformation des produits locaux, amélioration des processus et certification.",
      image: "tiere.jpg",
      stats: "",
    },
    {
      title: "Produits Halieutiques",
      description:
        "Valorisation des produits halieutiques à travers des techniques de transformation innovantes, soutenant les femmes dans leur activité économique.",
      image: "halieutiques.jpg",
      stats: "",
    },
  ];

  const youtubeVideos = [
    {
      title: "Suxali Jigeen en action",
      videoId: "HUeA3KXBeb8",
      description:
        "Découvrez notre travail sur le terrain et l'impact de nos actions sur les communautés locales.",
    },
  ];

  return (
    <div className="bg-orange-50" id="NosActions">
      <HeroSection
        title="Nos Actions sur le Terrain"
        subtitle="Des solutions concrètes pour l'autonomisation"
        image="image-mangrove.jpg"
      />

      <div className="container px-4 py-16 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-orange-900">
          Nos Initiatives
        </h2>
        <p className="mb-8 text-lg text-gray-800 text-center">
          Suxali Jégeen mène des actions en milieu urbain, péri-urbain et rural.
          L&apos;organisation aide les populations à se réapproprier les
          aliments de leur terroir et à construire des marchés locaux grâce aux
          plateformes territoriales mises en place dans les quartiers et
          communes. Nous accompagnons également les TPE et les entreprises
          féminines à accéder à des équipements sobres en carbone et à
          l&apos;eau, les impliquant ainsi dans la transition énergétique.
        </p>
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          <StatCard
            icon={GraduationCap}
            value="25+"
            label="Villages Accompagnés"
          />
          <StatCard icon={Briefcase} value="500+" label="Femmes Formées" />
          <StatCard
            icon={HeartHandshake}
            value="15+"
            label="Produits Développés"
          />
        </div>

        <div className="p-8 mb-16 bg-white rounded-lg shadow-lg">
          <h2 className="mb-8 text-3xl font-bold text-center text-orange-900">
            Notre Approche
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                <span className="text-3xl font-bold text-orange-500">1</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-orange-900">
                Recherches-Actions
              </h3>
              <p className="text-gray-600">
                Diagnostic et analyse pour une compréhension approfondie
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                <span className="text-3xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-orange-900">
                Formations
              </h3>
              <p className="text-gray-600">
                Formation pratique et théorique pour renforcer les compétences
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                <span className="text-3xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-orange-900">
                Plaidoyer
              </h3>
              <p className="text-gray-600">
                Suxali Jigeen réalise des études de contribution afin de rendre
                visible la contribution des femmes et leur organisation dans les
                politiques alimentaires et climatiques.
              </p>
            </div>
          </div>
        </div>

        <h2 className="mb-12 text-3xl font-bold text-center text-orange-900">
          Nos Programmes Phares
        </h2>
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <h2 className="mb-12 text-3xl font-bold text-center text-orange-900">
          Actualités
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {youtubeVideos.map((video, index) => (
            <YouTubeVideo key={index} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
