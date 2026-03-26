import { Check, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f8f8ff]">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
      
      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge with Pulsing Dot */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <div className="relative">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <div className="absolute inset-0 w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Концерты каждый сезон
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Русский музыкальный хор <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">в Кембридже</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Мы сохраняем и развиваем традиции русской хоровой музыки,
              объединяя талантливых певцов и любителей классической культуры.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                'Профессиональные концерты в лучших залах',
                'Дружная атмосфера и культурные мероприятия',
                'Репертуар от классики до современности',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Присоединиться к хору
              </a>
              <a
                href="#benefits"
                className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-300 hover:border-red-600 transition-all duration-300"
              >
                Узнать больше
              </a>
            </div>

            {/* Client Avatars */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['АМ', 'ЕК', 'ИС', 'МП', 'НВ'].map((initials, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center text-white text-xs font-semibold border-2 border-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">1200+ участников</div>
                <div className="text-gray-600">За все время</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glowing Blob Behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/40 to-amber-400/40 rounded-3xl blur-3xl transform scale-110"></div>

            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1610254449353-5698372fa83b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9pciUyMHNpbmdlcnMlMjBwZXJmb3JtaW5nJTIwY2xhc3NpY2FsJTIwbXVzaWN8ZW58MXx8fHwxNzc0NTQ4MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Russian Music Choir Cambridge"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    Рейтинг 5.0
                  </div>
                  <div className="text-xs text-gray-600">250+ отзывов</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}