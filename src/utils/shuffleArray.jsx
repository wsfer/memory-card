// Returns a copy of an original array with elements in a random order
export function shuffleArray(originalArray) {
  const arrayClone = originalArray.slice();
  let currentIndex = arrayClone.length;
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [arrayClone[currentIndex], arrayClone[randomIndex]] = [
      arrayClone[randomIndex],
      arrayClone[currentIndex],
    ];
  }

  return arrayClone;
}
