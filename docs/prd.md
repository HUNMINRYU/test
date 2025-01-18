# 이상형월드컵 MVP PRD

## 1. 서비스 개요
- 사용자가 토너먼트 방식으로 여러 선택지 중 최애를 선정할 수 있는 웹 서비스
- Next.js와 TailwindCSS를 활용한 반응형 웹 디자인
- Notion과 유사한 미니멀한 디자인 적용
- Client-side only 구현 (데이터는 constant 변수로 관리)

## 2. 핵심 기능 정의

### 2.1 토너먼트 진행 기능
- 2개의 선택지 중 1개를 선택하여 다음 라운드로 진출
- 토너먼트 방식으로 진행 (8강/16강 등)
- 최종 우승자 선정 및 결과 화면 표시

### 2.2 결과 공유 기능
- 최종 우승자 결과 화면에서 URL 복사 기능 제공
- 클립보드 복사 완료시 토스트 메시지로 피드백 제공

### 2.3 토너먼트 선택 기능
- 메인 페이지에서 여러 토너먼트 목록 제공
- 각 토너먼트별 제목과 간단한 설명 표시
- 썸네일 이미지 표시 (선택된 이미지들 중 대표 이미지)

### 2.4 진행 상황 표시 기능
- 현재 진행 중인 라운드와 경기 정보 표시
- 토너먼트 브래킷 미리보기 제공
- 이전 선택 취소 버튼 (실수로 잘못 선택한 경우 대비)

## 3. 페이지 구조

### 3.1 메인 페이지 (/)
- 서비스 소개 섹션
- 토너먼트 목록 그리드 표시
- 각 토너먼트 카드:
  - 대표 이미지
  - 제목
  - 간단한 설명
  - 참여하기 버튼

### 3.2 토너먼트 진행 페이지 (/tournament/[id])
- 현재 라운드 정보
- 진행 상황 표시 (예: 16강 3/8 경기)
- 좌/우 선택지 이미지 및 정보
- 이전 선택 취소 버튼
- 브래킷 미리보기 버튼

### 3.3 결과 페이지 (/tournament/[id]/result)
- 우승자 정보 및 이미지
- 토너먼트 브래킷 전체 보기
- URL 공유 버튼
- 다시하기 버튼
- 다른 토너먼트 하기 버튼 (메인으로 이동)

## 4. 데이터 구조

```typescript
// types/index.ts
interface Tournament {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  candidates: Candidate[];
}

interface Candidate {
  id: string;
  name: string;
  image: string;
  description?: string;
}

// 실제 데이터는 constants/data.ts에 정의
```

## 5. 기술 스택
- Next.js
- TailwindCSS
- TypeScript
- 상태관리: React Context (또는 Zustand)

## 6. 디자인 가이드라인
- Notion과 유사한 미니멀한 디자인
- 여백과 타이포그래피 중심의 레이아웃
- 모바일 퍼스트 반응형 디자인
- 컬러 팔레트:
  - 기본 배경: white
  - 텍스트: gray-900
  - 강조: blue-600
  - 보조: gray-200