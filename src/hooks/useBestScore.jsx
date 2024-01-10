import { useEffect, useState } from 'react';

export function useBestScore(score) {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const savedBestScore = localStorage.getItem('bestScore') || 0;

    if (score > savedBestScore) {
      setBestScore(score);
      localStorage.setItem('bestScore', score);
    } else {
      setBestScore(savedBestScore);
    }
  }, [score]);

  return bestScore;
}
