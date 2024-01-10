export function Scoreboard({ currentScore, bestScore }) {
  return (
    <section aria-label="Scoreboard" className="scoreboard">
      {currentScore && (
        <p className="scoreboard__text">Score: {currentScore}</p>
      )}
      <p className="scoreboard__text">Best Score: {bestScore || 0}</p>
    </section>
  );
}
