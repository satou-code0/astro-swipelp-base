import { motion } from 'framer-motion';
import { AnimatedTitle, AnimatedText } from './AnimatedTitle';

export const ContactSection = () => {
  return (
    <motion.section
      className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-800 snap-start px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              お問い合わせ
            </AnimatedTitle>
            <AnimatedText className="text-base sm:text-xl text-white/90">
              ご質問・ご相談はお気軽に
            </AnimatedText>
          </div>

          <motion.form
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2 text-sm sm:text-base">お名前</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm sm:text-base"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2 text-sm sm:text-base">メールアドレス</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm sm:text-base"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2 text-sm sm:text-base">メッセージ</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm sm:text-base"
                placeholder="ご質問・ご相談内容をご記入ください"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-white text-purple-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              送信する
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}; 