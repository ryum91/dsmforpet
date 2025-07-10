import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCardNew';
import { ProgressBar } from './components/ProgressBar';
import { questions } from './data';
import { calculateRecommendation, getProgressPercentage } from './utils/recommendation';
import type { Answer, QuizResult } from './types';

type AppState = 'welcome' | 'quiz' | 'result';

function App() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleStart = () => {
    setAppState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const handleAnswer = (optionValue: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      selectedOption: optionValue
    };

    const updatedAnswers = [...answers.filter(a => a.questionId !== currentQuestion.id), newAnswer];
    setAnswers(updatedAnswers);

    // 다음 질문으로 이동하거나 결과 계산
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        const quizResult = calculateRecommendation(updatedAnswers);
        setResult(quizResult);
        setAppState('result');
      }
    }, 500);
  };

  const handleRestart = () => {
    setAppState('welcome');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = answers.find(a => a.questionId === currentQuestion?.id)?.selectedOption;
  const progress = getProgressPercentage(currentQuestionIndex + 1, questions.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <AnimatePresence mode="wait">
          {appState === 'welcome' && <WelcomeScreen key="welcome" onStart={handleStart} />}

          {appState === 'quiz' && currentQuestion && (
            <div key="quiz" className="w-full max-w-2xl mx-auto">
              <ProgressBar
                progress={progress}
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={questions.length}
              />
              <QuestionCard question={currentQuestion} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} />
            </div>
          )}

          {appState === 'result' && result && <ResultCard key="result" result={result} onRestart={handleRestart} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
