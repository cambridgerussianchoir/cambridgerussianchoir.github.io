import { Music, Users, Calendar, Award, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const benefits = [
  {
    icon: Music,
    title: 'Богатый репертуар',
    description: 'От классической духовной музыки до народных песен и современных произведений русских композиторов.',
  },
  {
    icon: Users,
    title: 'Дружное сообщество',
    description: 'Познакомьтесь с единомышленниками, разделяющими любовь к русской культуре и музыке.',
  },
  {
    icon: Calendar,
    title: 'Регулярные концерты',
    description: 'Выступления в престижных залах Кембриджа, Лондона и других городов Великобритании.',
  },
  {
    icon: Award,
    title: 'Профессиональное руководство',
    description: 'Опытные дирижёры и музыкальные руководители с международным признанием.',
  },
  {
    icon: Heart,
    title: 'Культурные мероприятия',
    description: 'Участвуйте в фестивалях, благотворительных концертах и культурных праздниках.',
  },
  {
    icon: Sparkles,
    title: 'Развитие таланта',
    description: 'Совершенствуйте вокальные навыки и раскрывайте свой творческий потенциал.',
  },
];

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
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

export function Benefits() {
  const { ref, isInView } = useInView();

  return (
    <section id="benefits" className="py-20 bg-[#f8f8ff]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Почему{' '}
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              выбирают нас
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Присоединяйтесь к одному из ведущих русских хоров в Великобритании
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
