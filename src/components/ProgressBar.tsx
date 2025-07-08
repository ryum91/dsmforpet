import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  currentQuestion: number;
  totalQuestions: number;
}

export const ProgressBar = ({ progress, currentQuestion, totalQuestions }: ProgressBarProps) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          {currentQuestion} / {totalQuestions}
        </span>
        <span className="text-sm font-medium text-blue-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};
