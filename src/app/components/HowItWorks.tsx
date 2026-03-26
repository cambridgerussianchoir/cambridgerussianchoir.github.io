import { UserPlus, Music2, Mic } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

function useInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

export function HowItWorks() {
  const { ref, isInView } = useInView();

  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: 'Подайте заявку',
      description: 'Заполните простую форму на нашем сайте или напишите нам. Расскажите о своём музыкальном опыте.',
    },
    {
      number: 2,
      icon: Music2,
      title: 'Прослушивание',
      description: 'Пройдите дружеское прослушивание с нашим хормейстером. Это поможет определить ваш голос и партию.',
    },
    {
      number: 3,
      icon: Mic,
      title: 'Начните петь',
      description: 'Присоединяйтесь к репетициям и концертам. Погрузитесь в мир русской хоровой музыки!',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Как{' '}
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              присоединиться
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Три простых шага до вашего первого выступления
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 opacity-20"></div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Number Badge */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-amber-500 animate-ping opacity-20"></div>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 border border-gray-100">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-8 text-amber-500">
                      <svg
                        className="w-16 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 64 32"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M0 16h56m0 0l-8-8m8 8l-8 8"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
