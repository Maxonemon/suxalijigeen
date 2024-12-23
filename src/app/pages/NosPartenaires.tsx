import { Building2, Globe2, HandshakeIcon } from "lucide-react";
import { HeroSection } from "../components/HeroSection";
import LogoSlider from "../components/logo-slider";

export function NosPartenaires() {
  const partners = [
    {
      category: "Institutions Publiques",
      icon: Building2,
      list: [
        "Ministère de la Femme, de la Famille et du Genre",
        "Direction de l'Entrepreneuriat Féminin",
        "Chambre de Commerce de Dakar",
      ],
    },
    {
      category: "Organisations Internationales",
      icon: Globe2,
      list: [
        "ONU Femmes Sénégal",
        "Fondation Africaine pour l'Entrepreneuriat",
        "Association des Femmes d'Afrique de l'Ouest",
      ],
    },
    {
      category: "Partenaires Privés",
      icon: HandshakeIcon,
      list: [
        "Banque Régionale de Solidarité",
        "Réseau des Entrepreneurs Sociaux",
        "Association des Exportateurs de Produits Locaux",
      ],
    },
  ];

  const achievements = [
    {
      year: "2023",
      title: "Prix de l'Innovation Sociale",
      organization: "Fondation Africaine pour l'Entrepreneuriat",
    },
    {
      year: "2022",
      title: "Trophée de l'Excellence",
      organization: "Ministère de la Femme",
    },
    {
      year: "2021",
      title: "Prix de l'Impact Communautaire",
      organization: "ONU Femmes Sénégal",
    },
  ];

  return (
    <div className="bg-orange-50" id="NosPartenaires">
      <HeroSection
        title="Nos Partenaires"
        subtitle="Ensemble pour un impact durable"
        image="partenariat.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">
            Ils Nous Font Confiance
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Notre impact est multiplié grâce à des partenariats stratégiques
            avec des organisations qui partagent notre vision d&apos;un Sénégal
            plus équitable.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partners.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <category.icon className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-orange-900 mb-4">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.list.map((partner, pIndex) => (
                  <li key={pIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        <LogoSlider />

        <div className="bg-orange-900 text-white rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Devenez Partenaire</h3>
          <p className="mb-8 text-orange-100">
            Rejoignez-nous dans notre mission d&apos;autonomisation des femmes
            au Sénégal.
          </p>
          <button className="bg-white text-orange-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-100 transition-colors duration-200">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
}
