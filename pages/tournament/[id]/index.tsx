import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface Candidate {
  id: number;
  name: string;
  imageUrl: string;
}

interface TournamentProps {
  candidates: Candidate[];
}

const MOCK_CANDIDATES = [
  { id: 1, name: "후보 1", imageUrl: "https://picsum.photos/400/400?random=1" },
  { id: 2, name: "후보 2", imageUrl: "https://picsum.photos/400/400?random=2" },
  { id: 3, name: "후보 3", imageUrl: "https://picsum.photos/400/400?random=3" },
  { id: 4, name: "후보 4", imageUrl: "https://picsum.photos/400/400?random=4" },
  { id: 5, name: "후보 5", imageUrl: "https://picsum.photos/400/400?random=5" },
  { id: 6, name: "후보 6", imageUrl: "https://picsum.photos/400/400?random=6" },
  { id: 7, name: "후보 7", imageUrl: "https://picsum.photos/400/400?random=7" },
  { id: 8, name: "후보 8", imageUrl: "https://picsum.photos/400/400?random=8" },
];

export default function Tournament({ candidates }: TournamentProps) {
  const router = useRouter();
  const [round, setRound] = useState(() => {
    // 8강이면 3, 4강이면 2, 결승이면 1
    return Math.log2(candidates.length);
  });
  const [currentPair, setCurrentPair] = useState<[Candidate, Candidate]>();
  const [winners, setWinners] = useState<Candidate[]>([]);
  const [currentRoundCandidates, setCurrentRoundCandidates] = useState<Candidate[]>(candidates);
  const [matchCount, setMatchCount] = useState(0);
  
  // 현재 라운드의 첫 매치 설정
  useEffect(() => {
    if (currentRoundCandidates.length >= 2) {
      setCurrentPair([currentRoundCandidates[0], currentRoundCandidates[1]]);
    }
  }, [currentRoundCandidates]);

  // 라운드 이름 계산
  const getRoundName = (roundNumber: number) => {
    switch (roundNumber) {
      case 3: return "8강";
      case 2: return "4강";
      case 1: return "결승";
      default: return `${Math.pow(2, roundNumber)}강`;
    }
  };

  // 후보 선택 처리
  const handleSelect = (selected: Candidate) => {
    setWinners(prev => [...prev, selected]);
    setMatchCount(prev => prev + 1);
    
    const totalMatchesInRound = currentRoundCandidates.length / 2;
    
    if (matchCount + 1 === totalMatchesInRound) {
      // 현재 라운드의 모든 매치가 끝났을 때
      if (winners.length + 1 === 1 && round === 1) {
        // 결승전이 끝나면 결과 페이지로 이동
        router.push(`/tournament/${router.query.id}/result?winner=${selected.id}`);
      } else {
        // 다음 라운드 시작
        const nextRoundCandidates = [...winners, selected];
        setRound(prev => prev - 1);
        setCurrentRoundCandidates(nextRoundCandidates);
        setWinners([]);
        setMatchCount(0);
      }
    } else {
      // 현재 라운드 계속 진행
      const nextMatchIndex = (matchCount + 1) * 2;
      setCurrentPair([
        currentRoundCandidates[nextMatchIndex],
        currentRoundCandidates[nextMatchIndex + 1]
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">이상형 월드컵</h1>
          <p className="text-lg font-semibold mb-1">{getRoundName(round)}</p>
          <p className="text-gray-600">
            {matchCount + 1} / {currentRoundCandidates.length / 2} 경기
          </p>
        </div>
        
        {currentPair && (
          <div className="grid grid-cols-2 gap-4">
            {currentPair.map((candidate) => (
              <button
                key={candidate.id}
                onClick={() => handleSelect(candidate)}
                className="aspect-square relative overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
              >
                <img
                  src={candidate.imageUrl}
                  alt={candidate.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4">
                  <p className="text-white text-center">{candidate.name}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      candidates: MOCK_CANDIDATES,
    },
  };
} 