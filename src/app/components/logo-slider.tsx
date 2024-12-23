"use client";

// Logos can be replaced with actual logo images or SVGs
const logos = [
  "monde-selon-les-femmes.svg",
  "wecef-france.png",
  "logo-fondation-raja.png",
  "logo_enraiza.png",

  // "microsoft.jpg",
];

export default function LogoSlider() {
  return (
    <div className="relative flex overflow-hidden  py-8 my-4">
      <div className="animate-infinite-scroll flex">
        {[...logos, ...logos].map((logo, index) => (
          <div
            className="flex w-[200px] items-center justify-center px-8"
            key={index}
          >
            <img
              src={logo}
              alt=""
              className="h-20 w-auto object-contain grayscale transition-all duration-200 hover:grayscale-0"
              width={10}
              height={10}
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-orange-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-orange-50 to-transparent" />
    </div>
  );
}
