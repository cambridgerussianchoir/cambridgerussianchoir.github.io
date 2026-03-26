import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

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

export function FAQ() {
  const { ref, isInView } = useInView();

  const faqs = [
    {
      question: 'Нужен ли музыкальный опыт для вступления в хор?',
      answer: 'Не обязательно! Мы принимаем участников с разным уровнем подготовки. Главное — желание петь и любовь к музыке. На прослушивании мы поможем определить ваш голос и подходящую партию. У нас есть и опытные певцы, и те, кто только начинает свой путь в хоровом пении.',
    },
    {
      question: 'Как часто проходят репетиции?',
      answer: 'Репетиции проходят два раза в неделю по вечерам в центре Кембриджа. Обычно это вторник и четверг с 19:00 до 21:00. Перед концертами могут быть дополнительные репетиции. Мы понимаем, что у всех есть другие обязательства, поэтому стараемся быть гибкими.',
    },
    {
      question: 'Какова стоимость участия в хоре?',
      answer: 'Годовой членский взнос составляет £150 для взрослых и £75 для студентов и пенсионеров. Это покрывает расходы на аренду помещений, ноты, концертные костюмы и другие организационные нужды. Первое занятие можно посетить бесплатно!',
    },
    {
      question: 'Нужно ли знать русский язык?',
      answer: 'Знание русского языка приветствуется, но не обязательно. Многие наши участники не являются носителями языка. Мы помогаем с правильным произношением текстов, предоставляем транслитерацию и переводы. Главное — ваша музыкальность и желание исполнять русскую музыку.',
    },
    {
      question: 'Где проходят концерты хора?',
      answer: 'Мы выступаем на лучших площадках Кембриджа и соседних городов: West Road Concert Hall, различные колледжи Кембриджского университета, церкви и концертные залы. Также участвуем в фестивалях в Лондоне и других городах Великобритании. В год мы даём около 8-10 крупных концертов.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Часто задаваемые{' '}
            <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              вопросы
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Ответы на самые популярные вопросы о нашем хоре
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-amber-600 transition-colors"
          >
            Свяжитесь с нами
            <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
