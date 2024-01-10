import { useState } from 'react';
import { useBestScore } from './hooks/useBestScore';
import { Header } from './components/Header/Header';
import { Scoreboard } from './components/Scoreboard/Scoreboard';
import './App.css';

function App() {
  const [score, setScore] = useState(null);
  const bestScore = useBestScore(score);

  return (
    <>
      <Header />
      <Scoreboard currentScore={score} bestScore={bestScore} />
    </>
  );
}

export default App;
