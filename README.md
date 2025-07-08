# 🐕 우리 강아지 간식 찾기 - DSM for Pet

우리 강아지에게 맞는 수산물 간식을 찾아주는 설문조사 웹 애플리케이션입니다.

## ✨ 주요 기능

- **개인 맞춤 추천**: 10가지 설문을 통해 강아지의 특성에 맞는 간식 추천
- **5가지 프리미엄 간식**: 수제 홍어 꼬리, 연어 껍질 스틱, 연어 뽈떼기, 홍어 연골, 수제 새우
- **직관적인 UI**: 이모지와 아이콘 기반의 사용자 친화적 인터페이스
- **부드러운 애니메이션**: Framer Motion을 활용한 자연스러운 화면 전환
- **반응형 디자인**: 모바일부터 데스크톱까지 모든 기기에서 최적화된 경험

## 🛠️ 기술 스택

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 빌드 결과 미리보기
pnpm preview
```

### 개발 서버

개발 서버가 실행되면 [http://localhost:5173](http://localhost:5173)에서 애플리케이션을 확인할 수 있습니다.

## 📱 주요 화면

1. **시작 화면**: 앱 소개 및 간식 목록
2. **설문 화면**: 10개의 질문과 진행률 표시
3. **결과 화면**: 추천 간식과 이유, 급여 팁

## 🐶 설문 항목

1. 강아지 크기 (소형견/중형견/대형견)
2. 기호성 정도
3. 단백질 선호도
4. 질감 선호도
5. 알레르기 여부
6. 급여 시간
7. 급여 빈도
8. 털 빠짐 정도
9. 활동량
10. 질감 선호도 (재확인)

## 🎯 추천 알고리즘

강아지의 답변을 바탕으로 다음 요소들을 고려하여 최적의 간식을 추천합니다:

- **크기별 적합성** (20점)
- **질감 선호도** (25점)
- **단백질 요구도** (15점)
- **알레르기 안전성** (필수)
- **활동량 매칭** (10점)
- **급여 빈도** (10점)
- **특별 요구사항** (10점)

## 🏗️ 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── WelcomeScreen.tsx
│   ├── QuestionCard.tsx
│   ├── ResultCard.tsx
│   └── ProgressBar.tsx
├── data/               # 정적 데이터
│   └── index.ts
├── types/              # TypeScript 타입 정의
│   └── index.ts
├── utils/              # 유틸리티 함수
│   └── recommendation.ts
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx           # 앱 진입점
└── index.css          # 글로벌 스타일
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

💕 **우리 아이에게 맞는 건강한 간식을 찾아주세요!** 🐾
