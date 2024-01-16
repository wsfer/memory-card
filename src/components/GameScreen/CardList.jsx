import { Card } from '../Card/Card';

export function CardList({ pokemons, playTurn }) {
  return (
    <section aria-label="Card list">
      <ul className="gamescreen__card-list">
        {pokemons.map((pokemon, index) => (
          <li key={pokemon.name}>
            <Card url={pokemon.url} handleClick={() => playTurn(index)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
