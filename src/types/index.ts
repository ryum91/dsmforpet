export interface Question {
  id: number;
  question: string;
  options: Option[];
  type: 'single' | 'emoji';
}

export interface Option {
  id: string;
  text: string;
  emoji?: string;
  value: string;
}

export interface Answer {
  questionId: number;
  selectedOption: string;
}

export interface Treat {
  id: string;
  name: string;
  description: string;
  image: string;
  feedingTip: string;
  characteristics: string[];
  matchingCriteria: {
    size?: string[];
    texture?: string[];
    protein?: boolean;
    allergy?: string[];
    activity?: string[];
    frequency?: string[];
  };
}

export interface QuizResult {
  recommendedTreat: Treat;
  matchPercentage: number;
  reasoning: string[];
}
