import { useEffect, useState } from 'react';
import { getCardNumber } from '../utils/getCardNumber';
import { getRandomPokemons } from '../utils/getRandomPokemons';

/**
 *  - returns a new list of random pokemons each time level changes
 *  - keep track of selected pokemons
 *  - returns information on game status each time a pokemon is selected
 * */
export function usePokemons(data, level, difficulty) {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const selectPokemon = (pokemon) => {
    const totalCards = getCardNumber(difficulty, level);
    const clickedCards = selectedPokemons.length;

    if (selectedPokemons.includes(pokemon)) {
      return { isGameOver: true, totalCards, clickedCards };
    } else {
      const isGameOver = level === 7 && totalCards === clickedCards + 1;
      setSelectedPokemons([...selectedPokemons, pokemon]);
      return { isGameOver, totalCards, clickedCards: clickedCards + 1 };
    }
  };

  useEffect(() => {
    if (data) {
      const quantity = getCardNumber(difficulty, level);
      const randomPokemons = getRandomPokemons(data.results, quantity);
      setPokemons(randomPokemons);

      return () => {
        setSelectedPokemons([]);
      };
    }
  }, [data, level, difficulty]);

  return [pokemons, selectedPokemons, selectPokemon];
}
