import type { Answer, Treat, QuizResult } from '../types';
import { treats } from '../data';

export const calculateRecommendation = (answers: Answer[]): QuizResult => {
  const answerMap = new Map(answers.map(answer => [answer.questionId, answer.selectedOption]));

  let bestTreat: Treat = treats[0];
  let bestScore = 0;
  let bestReasons: string[] = [];

  treats.forEach(treat => {
    let score = 0;
    const reasons: string[] = [];

    // 크기 매칭 (20점)
    const size = answerMap.get(1);
    if (size && treat.matchingCriteria.size?.includes(size)) {
      score += 20;
      reasons.push('강아지 크기에 적합해요');
    }

    // 질감 선호도 매칭 (25점)
    const texture1 = answerMap.get(4);
    const texture2 = answerMap.get(10);
    if (
      (texture1 && treat.matchingCriteria.texture?.includes(texture1)) ||
      (texture2 && treat.matchingCriteria.texture?.includes(texture2))
    ) {
      score += 25;
      reasons.push('선호하는 질감과 일치해요');
    }

    // 단백질 선호도 매칭 (15점)
    const proteinPref = answerMap.get(3);
    if (proteinPref === 'yes' && treat.matchingCriteria.protein) {
      score += 15;
      reasons.push('단백질이 풍부해요');
    }

    // 알레르기 체크 (중요! -100점 if 알레르기)
    const allergy = answerMap.get(5);
    if (allergy === 'shrimp' && treat.id === 'dried_shrimp') {
      score -= 100;
      reasons.push('새우 알레르기로 인해 추천하지 않아요');
    } else if (allergy === 'salmon' && (treat.id === 'salmon_skin' || treat.id === 'salmon_meat')) {
      score -= 100;
      reasons.push('연어 알레르기로 인해 추천하지 않아요');
    } else if (allergy === 'none') {
      score += 10;
      reasons.push('알레르기 걱정 없이 안전해요');
    }

    // 활동량 매칭 (10점)
    const activity = answerMap.get(9);
    if (activity && treat.matchingCriteria.activity?.includes(activity)) {
      score += 10;
      reasons.push('활동량에 맞는 간식이에요');
    }

    // 급여 빈도 매칭 (10점)
    const frequency = answerMap.get(7);
    if (frequency && treat.matchingCriteria.frequency?.includes(frequency)) {
      score += 10;
      reasons.push('급여 빈도에 적합해요');
    }

    // 기호성 고려 (10점)
    const pickiness = answerMap.get(2);
    if (pickiness === 'very_picky' && treat.id === 'salmon_meat') {
      score += 10;
      reasons.push('까다로운 강아지도 좋아하는 맛이에요');
    }

    // 털 빠짐과 오메가-3 매칭 (10점)
    const shedding = answerMap.get(8);
    if (shedding === 'much' && (treat.id === 'salmon_skin' || treat.id === 'salmon_meat')) {
      score += 10;
      reasons.push('털 윤기와 피부 건강에 도움이 돼요');
    }

    if (score > bestScore) {
      bestScore = score;
      bestTreat = treat;
      bestReasons = reasons;
    }
  });

  const matchPercentage = Math.min(Math.max((bestScore / 100) * 100, 0), 100);

  return {
    recommendedTreat: bestTreat,
    matchPercentage: Math.round(matchPercentage),
    reasoning: bestReasons
  };
};

export const getProgressPercentage = (currentQuestion: number, totalQuestions: number): number => {
  return Math.round((currentQuestion / totalQuestions) * 100);
};
