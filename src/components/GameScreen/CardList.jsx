import { useState } from 'react';
import { Card } from '../Card/Card';

export function CardList({ pokemons, playTurn }) {
  const [flipCards, setFlipCards] = useState(false);

  const handleClick = (event, index) => {
    event.currentTarget.blur(); // Remove focus from clicked card

    if (!flipCards) {
      setFlipCards(true);

      // Give enough time to play flip animation before updating cards
      setTimeout(() => {
        playTurn(index);
      }, 300);

      // Give some delay before doing flip animation again
      setTimeout(() => {
        setFlipCards(false);
      }, 500);
    }
  };

  return (
    <section aria-label="Card list">
      <ul className="gamescreen__card-list">
        {pokemons.map((pokemon, index) => (
          <li key={pokemon.name}>
            <Card
              url={pokemon.url}
              handleClick={(event) => handleClick(event, index)}
              flip={flipCards}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
