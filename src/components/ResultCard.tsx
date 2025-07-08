import { motion } from 'framer-motion';
import { Heart, Star, Info } from 'lucide-react';
import type { QuizResult } from '../types';

interface ResultCardProps {
  result: QuizResult;
  onRestart: () => void;
}

export const ResultCard = ({ result, onRestart }: ResultCardProps) => {
  const { recommendedTreat, matchPercentage, reasoning } = result;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
        {/* 헤더 */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="text-5xl sm:text-6xl mb-4">
            🎉
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">추천 결과가 나왔어요!</h2>
          <div className="flex items-center justify-center space-x-2">
            <Star className="text-yellow-500 fill-current w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-lg sm:text-xl font-semibold text-blue-600">{matchPercentage}% 매칭</span>
            <Star className="text-yellow-500 fill-current w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* 간식 정보 카드 */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl flex items-center justify-center shadow-md">
              <span className="text-3xl sm:text-4xl">
                {recommendedTreat.id === 'hongeo_tail' && '🐟'}
                {recommendedTreat.id === 'salmon_skin' && '🍤'}
                {recommendedTreat.id === 'salmon_meat' && '🐠'}
                {recommendedTreat.id === 'hongeo_cartilage' && '🦴'}
                {recommendedTreat.id === 'dried_shrimp' && '🦐'}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{recommendedTreat.name}</h3>
              <div className="flex items-center space-x-1 mt-1">
                <Heart className="text-red-500 fill-current w-4 h-4" />
                <span className="text-sm text-gray-600">추천 간식</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">{recommendedTreat.description}</p>

          {/* 특징 태그 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {recommendedTreat.characteristics.map((char, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                {char}
              </span>
            ))}
          </div>

          {/* 급여 팁 */}
          <div className="bg-white rounded-lg p-3 sm:p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Info className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-gray-800 text-sm sm:text-base">급여 팁</span>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm">{recommendedTreat.feedingTip}</p>
          </div>
        </div>

        {/* 추천 이유 */}
        <div className="mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">🎯 이 간식을 추천하는 이유</h4>
          <div className="space-y-2">
            {reasoning.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 다시하기 버튼 */}
        <div className="text-center">
          <motion.button
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
            다시 테스트하기
          </motion.button>
        </div>

        {/* 귀여운 강아지 */}
        <div className="text-center mt-4 sm:mt-6">
          <span className="text-3xl sm:text-4xl">🐶💕</span>
        </div>
      </div>
    </motion.div>
  );
};
