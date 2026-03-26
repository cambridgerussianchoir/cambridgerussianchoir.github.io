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
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

function Counter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [end, duration, hasStarted]);

  const startCounter = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      onViewportEnter={startCounter}
      className="text-center"
    >
      <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
    </motion.div>
  );
}

export function Stats() {
  const { ref, isInView } = useInView();

  const stats = [
    { value: 45, suffix: '+', label: 'Лет истории' },
    { value: 1200, suffix: '+', label: 'Участников' },
    { value: 150, suffix: '+', label: 'Концертов в год' },
    { value: 98, suffix: '%', label: 'Довольных участников' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-amber-500 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Наши достижения
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Цифры, которыми мы гордимся
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index}>
              <Counter end={stat.value} suffix={stat.suffix} duration={2} />
              <p className="text-white/90 text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
