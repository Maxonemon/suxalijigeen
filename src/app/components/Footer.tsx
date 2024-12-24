import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-orange-900 text-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Suxali Jegeen</h3>
            <p className="mb-4">
              Ensemble pour l&apos;autonomisation des femmes au Sénégal
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>contact@suxalijegeen.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+221 78 713 97 97</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-orange-300">
                  Qui sommes-nous?
                </a>
              </li>
              <li>
                <a href="##NosActions" className="hover:text-orange-300">
                  Nos actions
                </a>
              </li>
              <li>
                <a href="/#NosPartenaires" className="hover:text-orange-300">
                  Nos partenaires
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Restez informé de nos activités</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded bg-orange-800 text-white placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded text-white font-semibold transition-colors duration-200"
              >
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-orange-800 text-center">
          <p>&copy; 2024 Suxali Jigeen. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
