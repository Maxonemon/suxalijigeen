import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="bg-orange-900 p-8 rounded-lg text-white text-center">
      <Icon className="w-12 h-12 mx-auto mb-4" />
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-orange-200">{label}</div>
    </div>
  );
}