import { Flag, Heart, Sparkles, Target } from "lucide-react";
import { HeroSection } from "../components/HeroSection";

export function QuiSommesNous() {
  return (
    <div className="bg-orange-50" id="QuiSommesNous">
      <HeroSection
        title="Qui sommes-nous?"
        subtitle="Suxali Jigeen est une jeune association féministe qui travaille dans le domaine agricole, agroalimentaire et halieutique. Elle cherche à renforcer les filières féminines agro-alimentaire en amont et en aval tout en privilégiant la démarche recherche action et la prise en compte entre égalité de genre et changement climatique."
        image="hero-image.jpg"
      />

      <div className="container px-4 py-16 mx-auto">
        <div className="grid items-center gap-12 mb-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-orange-900">
              Notre Mission et Vision
            </h2>

            <p className="mb-4 text-lg text-gray-800">
              L’organisation prône comme valeurs : la justice sociale, la
              justice climatique, la solidarité et l’entraide afin d’arriver
              vers une société harmonieuse et un développement durable .
            </p>
            <p className="mb-4 text-lg text-gray-800">
              Suxali Jigeen a pour objectif de :
            </p>
            <ul className="mb-4 text-lg text-gray-800 list-disc list-inside">
              <li>Contribuer à l’autonomisation économique.</li>
              <li>Promouvoir l’égalité de genre et les droits des femmes.</li>
              <li>
                Promouvoir la place des femmes dans les Politiques de
                Souveraineté Alimentaire et du Climat.
              </li>
            </ul>
            {/* <p className="text-lg text-gray-800">
              Grâce à notre approche collaborative, nous avons réussi à toucher
              plus de 25 villages au Sénégal, transformant des vies et
              renforçant les communautés. Nous croyons fermement que
              l&apos;autonomisation des femmes est essentielle pour un
              développement durable et inclusif.
            </p> */}
          </div>
          <div className="relative">
            <img
              src="/image-femmes.jpg"
              alt="Femmes entrepreneurs"
              className="rounded-lg shadow-lg"
              width={10}
              height={10}
            />
            <div className="absolute p-4 text-white bg-orange-900 rounded-lg shadow-lg -bottom-4 -right-4">
              <p className="font-bold">2018 - 2024</p>
              <p className="text-sm">6 ans d&apos;impact</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 mb-16 md:grid-cols-4">
          <div className="p-8 bg-white border-t-4 border-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white"></div>
            <Target className="w-12 h-12 mb-4 text-orange-500" />
            <h3 className="mb-3 text-xl font-bold text-orange-900">
              Notre Vision
            </h3>
            <p className="text-gray-700">
              Contribuer à l&apos;avènement d&apos;une société où les femmes
              accèdent et contrôlent les ressources de manière durable et
              équitable.
            </p>
          </div>
          <div className="p-8 bg-white border-t-4 border-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white"></div>
            <Heart className="w-12 h-12 mb-4 text-orange-500" />
            <h3 className="mb-3 text-xl font-bold text-orange-900">
              Nos Valeurs
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Solidarité féminine</li>
              <li>• Préservation des traditions</li>
              <li>• Innovation durable</li>
              <li>• Engagement communautaire</li>
            </ul>
          </div>
          <div className="p-8 bg-white border-t-4 border-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white"></div>
            <Sparkles className="w-12 h-12 mb-4 text-orange-500" />
            <h3 className="mb-3 text-xl font-bold text-orange-900">
              Notre Approche
            </h3>
            <p className="text-gray-700">
              Formation pratique, mentorat personnalisé et accès aux marchés
              pour un développement durable.
            </p>
          </div>
          <div className="p-8 bg-white border-t-4 border-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white"></div>
            <Flag className="w-12 h-12 mb-4 text-orange-500" />
            <h3 className="mb-3 text-xl font-bold text-orange-900">
              Notre Mission
            </h3>
            <p className="text-gray-700">
              Suxali Jigeen œuvre pour que les droits des femmes soient
              respectés sur le plan social, économique et politique.
            </p>
          </div>
        </div>

        {/* <div className="p-8 mb-16 bg-white rounded-lg shadow-lg">
          <h2 className="mb-8 text-3xl font-bold text-center text-orange-900">
            Notre Équipe Fondatrice
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80"
                alt="Fondatrice"
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-orange-900">Mariama Sow</h3>
              <p className="text-gray-600">Fondatrice et Présidente</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
                alt="Co-fondatrice"
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-orange-900">Aïda Diop</h3>
              <p className="text-gray-600">
                Co-fondatrice et Directrice des Programmes
              </p>
            </div>
          </div>
        </div> */}

        <div className="p-12 text-center text-white bg-orange-900 rounded-lg">
          <h3 className="mb-4 text-2xl font-bold">Rejoignez Notre Mouvement</h3>
          <p className="max-w-2xl mx-auto mb-8 text-orange-100">
            Ensemble, nous pouvons créer un impact durable dans la vie des
            femmes et de leurs communautés.
          </p>
          <button className="px-8 py-3 text-lg font-semibold text-orange-900 transition-colors duration-200 bg-white rounded-full hover:bg-orange-100">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
}
