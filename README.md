# 이상형 월드컵

간단하고 직관적인 이상형 월드컵 웹 애플리케이션입니다. 토너먼트 방식으로 당신의 최애를 찾아보세요.

## 주요 기능

- 다양한 주제의 이상형 월드컵 토너먼트
- 직관적인 토너먼트 진행 (8강/16강)
- 실시간 진행 상황 및 브래킷 확인
- 우승자 결과 공유

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS
- Zustand (상태 관리)

## 프로젝트 구조

```
src/
├── app/                    # 페이지 컴포넌트
│   ├── page.tsx           # 메인 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── tournament/        # 토너먼트 관련 페이지
│       ├── [id]/          # 토너먼트 진행
│       └── [id]/result/   # 결과 페이지
├── components/            # 재사용 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   └── tournament/       # 토너먼트 관련 컴포넌트
├── types/                # TypeScript 타입 정의
├── constants/            # 상수 및 데이터
├── store/               # 상태 관리
└── styles/              # 전역 스타일
```

## 시작하기

```bash
# 1. 저장소 클론
git clone https://github.com/[사용자명]/ideal-worldcup.git

# 2. 디렉토리 이동
cd ideal-worldcup

# 3. 패키지 설치
pnpm install

# 4. 개발 서버 실행
pnpm dev
```

http://localhost:3000 에서 확인하실 수 있습니다.

## 페이지 구성

- `/` - 메인 페이지
  - 토너먼트 목록
  - 서비스 소개
- `/tournament/[id]` - 토너먼트 진행
  - 현재 라운드 표시
  - 후보 선택
  - 브래킷 미리보기
- `/tournament/[id]/result` - 결과 페이지
  - 우승자 표시
  - 전체 브래킷
  - 결과 공유

## 기여하기

1. 이슈 생성 또는 기존 이슈 확인
2. Fork 및 개발 환경 설정
3. 브랜치 생성 (`feature/기능명`)
4. 개발 및 커밋
5. Pull Request 생성

## 라이선스

MIT License