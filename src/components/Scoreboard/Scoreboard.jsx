import { useEffect, useState } from 'react';
import { Container } from '../Container/Container';
import './Scoreboard.css';

export function Scoreboard({ currentScore, bestScore }) {
  const [oldScore, setOldScore] = useState(0);

  // Used on "gained score" element which remounts with a different key value to trigger the fadeout animation
  const gainedScore = currentScore - oldScore;

  // Set oldScore to old currentScore
  useEffect(() => {
    return () => setOldScore(currentScore);
  }, [currentScore]);

  return (
    <section aria-label="Scoreboard" className="scoreboard">
      <Container>
        <div className="scoreboard__row">
          {currentScore !== null && (
            <p className="scoreboard__text">
              Score: {currentScore}
              {gainedScore > 0 && (
                <span key={oldScore} className="scoreboard__gained-score">
                  {'+' + gainedScore}
                </span>
              )}
            </p>
          )}
          <p className="scoreboard__text">Best Score: {bestScore || 0}</p>
        </div>
      </Container>
    </section>
  );
}
