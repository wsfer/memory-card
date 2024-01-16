export function GameOverBox({ handleGameOver, score, win }) {
  return (
    <div className="gamescreen__gameover">
      <section className="gamescreen__gameover-box">
        <h2 className="gamescreen__gameover-title">
          {win ? 'You win' : 'You lose'}
        </h2>
        <p className="gamescreen__gameover-score">Final score: {score}</p>
        <button
          className="gamescreen__gameover-button"
          onClick={handleGameOver}
        >
          Restart
        </button>
      </section>
    </div>
  );
}
