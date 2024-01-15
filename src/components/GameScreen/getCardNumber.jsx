export function getCardNumber(difficulty, level) {
  const increment = { easy: 1, normal: 2, hard: 4 };
  const initial = { easy: 3, normal: 4, hard: 4 };

  return initial[difficulty] + (level - 1) * increment[difficulty];
}
