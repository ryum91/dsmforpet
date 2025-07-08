import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg mx-auto text-center px-4">
      {/* 메인 타이틀 */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="mb-6 sm:mb-8">
        <div className="text-6xl sm:text-8xl mb-4">🐕</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">우리 강아지에게</h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">맞는 간식은?</h1>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
      </motion.div>

      {/* 설명 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-6 sm:mb-8">
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
          간단한 설문을 통해
          <br />
          우리 아이에게 딱 맞는
          <br />
          <span className="font-semibold text-blue-600">수산물 간식</span>을 찾아드려요!
        </p>

        <div className="bg-blue-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Heart className="text-red-500 fill-current w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-gray-800 text-sm sm:text-base">5가지 프리미엄 간식</span>
          </div>
          <div className="text-xs sm:text-sm text-gray-600 space-y-1">
            <div>🐟 수제 홍어 꼬리</div>
            <div>🍤 연어 껍질 스틱</div>
            <div>🐠 연어 뽈떼기 (가마살)</div>
            <div>🦴 홍어 연골</div>
            <div>🦐 수제 새우</div>
          </div>
        </div>
      </motion.div>

      {/* 시작 버튼 */}
      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto">
        <span className="text-base sm:text-lg">테스트 시작하기</span>
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.button>

      {/* 장식 요소 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 sm:mt-8 text-2xl sm:text-3xl space-x-2">
        <span>🐾</span>
        <span>💕</span>
        <span>🐾</span>
      </motion.div>
    </motion.div>
  );
};
