export function getRandomPokemons(data, quantity) {
  const array = [];
  let randomIndex;

  while (array.length < quantity) {
    randomIndex = Math.floor(Math.random() * data.length);
    const randomPokemon = data[randomIndex];
    if (!array.includes(randomPokemon)) {
      array.push(randomPokemon);
    }
  }

  return array;
}
