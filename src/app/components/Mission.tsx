import React from 'react';
import { Heart, Users, Lightbulb } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">
          Notre Mission
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-orange-900">Empowerment</h3>
            <p className="text-gray-700">
              Renforcer l'autonomie des femmes à travers l'éducation et la formation professionnelle.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-orange-900">Communauté</h3>
            <p className="text-gray-700">
              Créer des réseaux de soutien et favoriser la solidarité entre les femmes.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-orange-900">Innovation</h3>
            <p className="text-gray-700">
              Développer des solutions durables adaptées aux besoins locaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}