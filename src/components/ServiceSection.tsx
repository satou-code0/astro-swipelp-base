import { motion } from 'framer-motion';
import { AnimatedTitle, AnimatedText } from './AnimatedTitle';

const services = [
  {
    title: 'Web開発',
    description: '最新技術を活用した、高速で安全なWebアプリケーション開発',
    icon: '💻'
  },
  {
    title: 'UI/UXデザイン',
    description: 'ユーザー体験を重視した、直感的で美しいインターフェース設計',
    icon: '🎨'
  },
  {
    title: 'コンサルティング',
    description: 'ビジネス目標達成のための戦略的な技術アドバイス',
    icon: '📊'
  }
];

export const ServiceSection = () => {
  return (
    <motion.section
      className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800 snap-start px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <AnimatedTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            サービス紹介
          </AnimatedTitle>
          <AnimatedText className="text-base sm:text-xl text-white/90">
            あなたのビジネスを次のレベルへ
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}; 