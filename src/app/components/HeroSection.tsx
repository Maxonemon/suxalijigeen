interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
}

export function HeroSection({ title, subtitle, image }: HeroSectionProps) {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute w-full h-full object-cover"
        width={10}
        height={10}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-transparent" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
          {subtitle && <p className="text-xl text-orange-50">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
