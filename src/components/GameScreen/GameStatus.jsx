import { getCardNumber } from './getCardNumber';
import { captalizeString } from '../../utils/capitalizeString';

export function GameStatus({ difficulty, level, clickedCards }) {
  const totalCards = getCardNumber(difficulty, level);

  return (
    <section aria-label="Game Status" className="gamescreen__status">
      <p className="gamescreen__difficulty">{captalizeString(difficulty)}</p>
      <p className="gamescreen__level">
        Level {level}: {clickedCards} / {totalCards}
      </p>
    </section>
  );
}
