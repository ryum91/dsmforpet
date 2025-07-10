import type { Treat, Question } from '../types';

export const treats: Treat[] = [
  {
    id: 'hongeo_tail',
    name: '수제 홍어 꼬리',
    description:
      '바삭하고 쫄깃한 식감의 홍어 꼬리 간식입니다. 단백질이 풍부하고 칼슘 함량이 높아 뼈 건강에 도움이 됩니다.',
    image: 'images/hongeo_tail.jpg',
    buyLink: 'https://smartstore.naver.com/dsmforpets/products/10602735294',
    feedingTip: '크기가 큰 편이므로 중형견 이상에게 추천하며, 하루 1-2개 정도 급여하세요.',
    characteristics: ['고단백', '칼슘 풍부', '바삭한 식감', '씹는 재미'],
    matchingCriteria: {
      size: ['medium', 'large'],
      texture: ['crispy', 'chewy'],
      protein: true,
      allergy: [],
      activity: ['active', 'normal'],
      frequency: ['1-2', '2-3']
    }
  },
  {
    id: 'salmon_skin',
    name: '연어 껍질 스틱',
    description: '오메가-3가 풍부한 연어 껍질로 만든 스틱형 간식입니다. 털 윤기와 피부 건강에 도움이 됩니다.',
    image: 'images/salmon_skin.jpg',
    buyLink: 'https://smartstore.naver.com/dsmforpets/products/10603200243',
    feedingTip: '소형견도 쉽게 먹을 수 있는 크기로, 훈련 보상용으로 적합합니다.',
    characteristics: ['오메가-3', '털 윤기', '스틱형', '소화 용이'],
    matchingCriteria: {
      size: ['small', 'medium'],
      texture: ['crispy'],
      protein: true,
      allergy: [],
      activity: ['active', 'normal', 'low'],
      frequency: ['1-2', '2-3', '4+']
    }
  },
  {
    id: 'salmon_meat',
    name: '연어 뽈떼기 (가마살)',
    description: '부드러운 연어 살코기를 건조한 프리미엄 간식입니다. 기호성이 뛰어나 까다로운 강아지도 좋아합니다.',
    image: 'images/salmon_meat.jpg',
    buyLink: 'https://smartstore.naver.com/dsmforpets/products/10603243677',
    feedingTip: '부드러운 식감으로 어린 강아지나 노령견에게도 좋습니다. 소량씩 자주 급여 가능합니다.',
    characteristics: ['부드러운 식감', '고급 단백질', '기호성 우수', '소화 용이'],
    matchingCriteria: {
      size: ['small', 'medium', 'large'],
      texture: ['soft', 'chewy'],
      protein: true,
      allergy: [],
      activity: ['active', 'normal', 'low'],
      frequency: ['2-3', '4+']
    }
  },
  {
    id: 'hongeo_cartilage',
    name: '홍어 연골',
    description: '쫄깃한 식감의 홍어 연골 간식입니다. 관절 건강에 도움이 되는 글루코사민이 풍부합니다.',
    image: 'images/hongeo_cartilage.jpg',
    buyLink: 'https://smartstore.naver.com/dsmforpets/products/10602980125',
    feedingTip: '오래 씹을 수 있어 스트레스 해소에 도움이 됩니다. 중형견 이상에게 추천합니다.',
    characteristics: ['글루코사민', '관절 건강', '쫄깃한 식감', '스트레스 해소'],
    matchingCriteria: {
      size: ['medium', 'large'],
      texture: ['chewy'],
      protein: true,
      allergy: [],
      activity: ['active', 'normal'],
      frequency: ['1-2', '2-3']
    }
  },
  {
    id: 'dried_shrimp',
    name: '수제 새우',
    description: '바삭하게 건조한 새우 간식입니다. 키틴질이 풍부하여 면역력 증진에 도움이 됩니다.',
    image: 'images/dried_shrimp.jpg',
    buyLink: 'https://smartstore.naver.com/dsmforpets/products/10603265633',
    feedingTip: '새우 알레르기가 없는 강아지에게만 급여하세요. 소량씩 간식으로 활용하세요.',
    characteristics: ['키틴질', '면역력 증진', '바삭한 식감', '소형 간식'],
    matchingCriteria: {
      size: ['small', 'medium', 'large'],
      texture: ['crispy'],
      protein: true,
      allergy: [],
      activity: ['active', 'normal', 'low'],
      frequency: ['1-2', '2-3', '4+']
    }
  }
];

export const questions: Question[] = [
  {
    id: 1,
    question: '우리 강아지의 크기는 어떻게 되나요?',
    type: 'emoji',
    options: [
      { id: '1-1', text: '소형견 (7kg 이하)', emoji: '🐕', value: 'small' },
      { id: '1-2', text: '중형견 (7-25kg)', emoji: '🐶', value: 'medium' },
      { id: '1-3', text: '대형견 (25kg 이상)', emoji: '🐕‍🦺', value: 'large' }
    ]
  },
  {
    id: 2,
    question: '기호성(입맛)이 까다로운 편인가요?',
    type: 'emoji',
    options: [
      { id: '2-1', text: '아무거나 잘 먹어요', emoji: '😋', value: 'not_picky' },
      { id: '2-2', text: '보통이에요', emoji: '😐', value: 'normal' },
      { id: '2-3', text: '매우 까다로워요', emoji: '😤', value: 'very_picky' }
    ]
  },
  {
    id: 3,
    question: '단백질 위주 간식을 선호하나요?',
    type: 'emoji',
    options: [
      { id: '3-1', text: '네, 좋아해요', emoji: '🥩', value: 'yes' },
      { id: '3-2', text: '보통이에요', emoji: '🤷‍♂️', value: 'normal' },
      { id: '3-3', text: '별로 안 좋아해요', emoji: '🙅‍♀️', value: 'no' }
    ]
  },
  {
    id: 4,
    question: '말랑한 간식보다는 오독오독 씹는 걸 좋아하나요?',
    type: 'emoji',
    options: [
      { id: '4-1', text: '바삭한 게 좋아요', emoji: '🦴', value: 'crispy' },
      { id: '4-2', text: '쫄깃한 게 좋아요', emoji: '🍖', value: 'chewy' },
      { id: '4-3', text: '부드러운 게 좋아요', emoji: '🥛', value: 'soft' }
    ]
  },
  {
    id: 5,
    question: '알레르기 이력이 있나요?',
    type: 'single',
    options: [
      { id: '5-1', text: '없어요', value: 'none' },
      { id: '5-2', text: '새우 알레르기', value: 'shrimp' },
      { id: '5-3', text: '연어 알레르기', value: 'salmon' },
      { id: '5-4', text: '기타 알레르기', value: 'other' }
    ]
  },
  {
    id: 6,
    question: '간식을 줄 때 주로 언제 주시나요?',
    type: 'emoji',
    options: [
      { id: '6-1', text: '훈련 보상으로', emoji: '🎯', value: 'training' },
      { id: '6-2', text: '간식 시간에', emoji: '⏰', value: 'snack_time' },
      { id: '6-3', text: '식사 보조로', emoji: '🍽️', value: 'meal_support' }
    ]
  },
  {
    id: 7,
    question: '간식을 자주 먹나요?',
    type: 'emoji',
    options: [
      { id: '7-1', text: '하루 1회 이하', emoji: '1️⃣', value: '1-' },
      { id: '7-2', text: '하루 2~3회', emoji: '2️⃣', value: '2-3' },
      { id: '7-3', text: '하루 4회 이상', emoji: '4️⃣', value: '4+' }
    ]
  },
  {
    id: 8,
    question: '우리 강아지는 털 빠짐이 많은 편인가요?',
    type: 'emoji',
    options: [
      { id: '8-1', text: '많이 빠져요', emoji: '🪮', value: 'much' },
      { id: '8-2', text: '보통이에요', emoji: '😊', value: 'normal' },
      { id: '8-3', text: '적게 빠져요', emoji: '✨', value: 'little' }
    ]
  },
  {
    id: 9,
    question: '평소 활동량은 어떤가요?',
    type: 'emoji',
    options: [
      { id: '9-1', text: '매우 활동적', emoji: '🏃‍♂️', value: 'active' },
      { id: '9-2', text: '보통', emoji: '🚶‍♂️', value: 'normal' },
      { id: '9-3', text: '낮음', emoji: '😴', value: 'low' }
    ]
  },
  {
    id: 10,
    question: '어떤 질감을 선호하나요?',
    type: 'emoji',
    options: [
      { id: '10-1', text: '바삭함', emoji: '🥨', value: 'crispy' },
      { id: '10-2', text: '쫄깃함', emoji: '🍤', value: 'chewy' },
      { id: '10-3', text: '부드러움', emoji: '🧸', value: 'soft' }
    ]
  }
];
