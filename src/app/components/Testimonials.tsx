import { Star, Quote } from 'lucide-react';
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
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

export function Testimonials() {
  const { ref, isInView } = useInView();

  const testimonials = [
    {
      name: 'Анна Михайлова',
      initials: 'АМ',
      role: 'Сопрано',
      text: 'Пение в хоре стало для меня настоящим открытием! Невероятная атмосфера, профессиональный подход и возможность выступать на лучших площадках. Здесь я нашла не только любовь к музыке, но и новых друзей.',
      rating: 5,
    },
    {
      name: 'Дмитрий Соколов',
      initials: 'ДС',
      role: 'Бас',
      text: 'Уже 8 лет пою в хоре и каждый концерт — это особенное событие. Репертуар богатый, от старинных духовных песнопений до современных произведений. Хормейстер — настоящий профессионал своего дела.',
      rating: 5,
    },
    {
      name: 'Елена Королёва',
      initials: 'ЕК',
      role: 'Альт',
      text: 'Присоединилась к хору год назад и ни разу не пожалела. Это не просто репетиции и концерты — это настоящая семья. Мы вместе отмечаем праздники, поддерживаем друг друга и создаём прекрасную музыку.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#f8f8ff]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Что говорят{' '}
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              наши участники
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Истории тех, кто уже стал частью нашей музыкальной семьи
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-red-500/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
