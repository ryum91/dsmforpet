import { motion } from 'framer-motion';
import { Heart, Star, Info, ShoppingCart, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { QuizResult } from '../types';
import { treats } from '../data';

interface ResultCardProps {
  result: QuizResult;
  onRestart: () => void;
}

export const ResultCard = ({ result, onRestart }: ResultCardProps) => {
  const { recommendedTreat, matchPercentage, reasoning } = result;

  // 추천된 간식을 제외한 다른 간식들
  const otherTreats = treats.filter(treat => treat.id !== recommendedTreat.id);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4">
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

      {/* 메인 추천 간식 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
        {/* 풀사이즈 이미지 */}
        <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-50 to-purple-50">
          <img
            src={recommendedTreat.image}
            alt={recommendedTreat.name}
            className="w-full h-full object-contain p-8"
            onError={e => {
              // 이미지 로드 실패시 이모지로 대체
              e.currentTarget.style.display = 'none';
              const fallbackDiv = e.currentTarget.nextElementSibling as HTMLDivElement;
              if (fallbackDiv) {
                fallbackDiv.style.display = 'flex';
              }
            }}
          />
          <div className="absolute inset-0 hidden items-center justify-center text-8xl sm:text-9xl">
            {recommendedTreat.id === 'hongeo_tail' && '🐟'}
            {recommendedTreat.id === 'salmon_skin' && '🍤'}
            {recommendedTreat.id === 'salmon_meat' && '🐠'}
            {recommendedTreat.id === 'hongeo_cartilage' && '🦴'}
            {recommendedTreat.id === 'dried_shrimp' && '🦐'}
          </div>
        </div>

        {/* 상품 정보 */}
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">{recommendedTreat.name}</h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="text-red-500 fill-current w-6 h-6" />
              <span className="text-lg text-gray-600 font-medium">추천 간식</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg text-center">
            {recommendedTreat.description}
          </p>

          {/* 특징 태그 */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {recommendedTreat.characteristics.map((char, index) => (
              <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {char}
              </span>
            ))}
          </div>

          {/* 구매 버튼 */}
          <div className="flex justify-center mb-6">
            <motion.a
              href={recommendedTreat.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <ShoppingCart className="w-6 h-6" />
              <span>지금 구매하기</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>

          {/* 급여 팁 */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <Info className="text-blue-600 w-5 h-5" />
              <span className="font-semibold text-gray-800">급여 팁</span>
            </div>
            <p className="text-gray-700 text-sm">{recommendedTreat.feedingTip}</p>
          </div>

          {/* 추천 이유 */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">🎯 이 간식을 추천하는 이유</h4>
            <div className="space-y-2">
              {reasoning.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 다른 간식들 구경하기 섹션 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-8">
        <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">🐕 다른 간식들도 구경해보세요</h4>

        {/* Swiper 컨테이너 래퍼 */}
        <div
          className="swiper-container-wrapper relative overflow-hidden w-full max-w-full"
          onTouchStart={e => e.stopPropagation()}
          onTouchMove={e => e.stopPropagation()}
          onTouchEnd={e => e.stopPropagation()}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            direction="horizontal"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination'
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            allowTouchMove={true}
            touchStartPreventDefault={false}
            simulateTouch={true}
            preventClicks={false}
            preventClicksPropagation={false}
            touchMoveStopPropagation={true}
            resistanceRatio={0}
            followFinger={true}
            threshold={10}
            longSwipesRatio={0.5}
            onTouchStart={(_, event) => {
              event.stopPropagation();
            }}
            onTouchMove={(_, event) => {
              event.stopPropagation();
            }}
            onTouchEnd={(_, event) => {
              event.stopPropagation();
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.2,
                spaceBetween: 12
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 16
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }}
            className="rounded-xl !pb-12 w-full"
            style={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              touchAction: 'pan-x',
              overflow: 'hidden'
            }}>
            {otherTreats.map(treat => (
              <SwiperSlide
                key={treat.id}
                style={{
                  height: 'auto',
                  display: 'flex',
                  touchAction: 'pan-x',
                  width: '100%',
                  maxWidth: '100%'
                }}>
                <div
                  className="bg-white rounded-xl shadow-lg p-3 w-full flex-shrink-0"
                  style={{
                    minHeight: '300px',
                    touchAction: 'auto',
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box'
                  }}>
                  <div className="h-32 flex items-center justify-center mb-4">
                    <img
                      src={treat.image}
                      alt={treat.name}
                      className="w-full h-full object-contain"
                      onError={e => {
                        e.currentTarget.style.display = 'none';
                        const fallbackDiv = e.currentTarget.nextElementSibling as HTMLDivElement;
                        if (fallbackDiv) {
                          fallbackDiv.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-full items-center justify-center text-4xl hidden">
                      {treat.id === 'hongeo_tail' && '🐟'}
                      {treat.id === 'salmon_skin' && '🍤'}
                      {treat.id === 'salmon_meat' && '🐠'}
                      {treat.id === 'hongeo_cartilage' && '🦴'}
                      {treat.id === 'dried_shrimp' && '🦐'}
                    </div>
                  </div>
                  <h5 className="font-bold text-gray-800 mb-2 text-center">{treat.name}</h5>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{treat.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3 justify-center">
                    {treat.characteristics.slice(0, 2).map((char, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {char}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <a
                      href={treat.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                      구경하기
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* 다시하기 버튼 */}
      <div className="text-center">
        <motion.button
          onClick={onRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base">
          다시 테스트하기
        </motion.button>
      </div>

      {/* 귀여운 강아지 */}
      <div className="text-center mt-6">
        <span className="text-3xl sm:text-4xl">🐶💕</span>
      </div>
    </motion.div>
  );
};
