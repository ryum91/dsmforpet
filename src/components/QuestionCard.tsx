import { motion } from 'framer-motion';
import type { Question, Option } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionValue: string) => void;
  selectedAnswer?: string;
}

export const QuestionCard = ({ question, onAnswer, selectedAnswer }: QuestionCardProps) => {
  const handleOptionClick = (option: Option) => {
    onAnswer(option.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-lg mx-auto px-4">
      <div className="mb-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 leading-tight">{question.question}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
      </div>

      <div className="space-y-3 sm:space-y-4">
        {question.options.map(option => (
          <motion.button
            key={option.id}
            onClick={() => handleOptionClick(option)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
              selectedAnswer === option.value
                ? 'border-blue-500 bg-blue-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
            }`}>
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              {question.type === 'emoji' && option.emoji && (
                <span className="text-2xl sm:text-3xl">{option.emoji}</span>
              )}
              <span
                className={`text-base sm:text-lg font-medium ${
                  selectedAnswer === option.value ? 'text-blue-700' : 'text-gray-700'
                }`}>
                {option.text}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="flex justify-center mt-6 sm:mt-8">
        <div className="text-4xl sm:text-6xl">🐕</div>
      </div>
    </motion.div>
  );
};
