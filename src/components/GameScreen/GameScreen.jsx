import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { usePokemons } from '../../hooks/usePokemons';
import { shuffleArray } from '../../utils/shuffleArray';
import { Loading } from '../Loading/Loading';
import { Container } from '../Container/Container';
import { GameStatus } from './GameStatus';
import { CardList } from './CardList';
import './GameScreen.css';

// This get pokemons from gen I, II, III and IV
const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=493';
const MAX_LEVEL = 7;

export function GameScreen({ difficulty, gameOver, score, setScore }) {
  const { data, loading, error } = useFetch(API_ENDPOINT);
  const [level, setLevel] = useState(1);
  const [pokemons, selectedPokemons, selectPokemon] = usePokemons(
    data,
    level,
    difficulty
  );

  const shuffledPokemons = shuffleArray(pokemons); // Shuffle happens on each re-render

  const playTurn = (index) => {
    const pokemon = shuffledPokemons[index];
    const gainedScore = 100 + (level - 1) * 50;
    const { isGameOver, totalCards, clickedCards } = selectPokemon(pokemon);

    if (isGameOver || (totalCards === clickedCards && level === MAX_LEVEL)) {
      gameOver();
      return;
    }

    if (totalCards === clickedCards) {
      setLevel(level + 1);
    }

    setScore(score + gainedScore);
  };

  return (
    <main className="gamescreen">
      {loading ? (
        <Loading message={error} />
      ) : (
        <Container>
          <GameStatus
            difficulty={difficulty}
            level={level}
            clickedCards={selectedPokemons.length}
            totalCards={pokemons.length}
          />
          <CardList pokemons={shuffledPokemons} playTurn={playTurn} />
        </Container>
      )}
    </main>
  );
}
