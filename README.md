# 이상형 월드컵

토너먼트 방식으로 진행되는 이상형 월드컵 웹 애플리케이션입니다.

## 주요 기능

- 8강 토너먼트 진행
- 라운드별 진행 상황 표시 (8강 → 4강 → 결승)
- 실시간 매치 현황 표시
- 우승자 결과 페이지

## 기술 스택

- **Frontend**
  - Next.js 14
  - TypeScript
  - Tailwind CSS

## 프로젝트 구조 
/
├── pages/ # 페이지 컴포넌트
│ ├── index.tsx # 메인 페이지
│ └── tournament/ # 토너먼트 관련 페이지
│ ├── [id]/ # 토너먼트 진행
│ └── [id]/result # 결과 페이지
├── components/ # 재사용 컴포넌트
├── styles/ # 스타일 파일
└── docs/ # 프로젝트 문서
├── ia.md # Information Architecture
└── prd.md # Product Requirements

## 시작하기

1. 저장소 클론
git clone https://github.com/[사용자명]/ideal-worldcup.git
2. 패키지 설치
npm install
3. 개발 서버 실행
npm run dev
4. 브라우저에서 http://localhost:3000 접속


## 페이지 구조

- `/` - 메인 페이지
- `/tournament/[id]` - 토너먼트 진행
- `/tournament/[id]/result` - 결과 페이지

## 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 라이선스

MIT License