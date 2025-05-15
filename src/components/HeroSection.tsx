import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedTitle, AnimatedText } from './AnimatedTitle';

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 snap-start px-4 sm:px-6 lg:px-8"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={prefersReducedMotion ? {} : { opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        willChange: 'opacity',
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto">
        <AnimatedTitle className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          革新的なソリューション
        </AnimatedTitle>
        <AnimatedText className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
          未来を創造する、あなたのパートナー
        </AnimatedText>
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            willChange: 'transform, opacity',
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 text-sm sm:text-base">
            詳しく見る
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base">
            お問い合わせ
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}; 