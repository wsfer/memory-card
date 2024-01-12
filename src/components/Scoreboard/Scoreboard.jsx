import { Container } from '../Container/Container';
import './Scoreboard.css';

export function Scoreboard({ currentScore, bestScore }) {
  return (
    <section aria-label="Scoreboard" className="scoreboard">
      <Container>
        <div className="scoreboard__row">
          {currentScore !== null && (
            <p className="scoreboard__text">Score: {currentScore}</p>
          )}
          <p className="scoreboard__text">Best Score: {bestScore || 0}</p>
        </div>
      </Container>
    </section>
  );
}
