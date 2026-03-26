import { motion } from 'motion/react';

export function LogoMarquee() {
  const partners = [
    'Cambridge University',
    'Музыкальная Академия',
    'Королевский Театр',
    'BBC Radio',
    'Trinity College',
    'Культурный Центр',
    'Концертный Зал Кембриджа',
    'Русское Общество',
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="mb-4 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-wider">
          Наши партнёры и площадки
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((partner, index) => (
            <span
              key={index}
              className="mx-8 text-2xl font-semibold text-gray-400"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
