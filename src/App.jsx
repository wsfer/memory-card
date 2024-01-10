import { useState } from 'react';
import { useBestScore } from './hooks/useBestScore';
import { Header } from './components/Header/Header';
import { Scoreboard } from './components/Scoreboard/Scoreboard';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  const [score, setScore] = useState(null);
  const bestScore = useBestScore(score);

  return (
    <>
      <Header />
      <Scoreboard currentScore={score} bestScore={bestScore} />
      <Footer />
    </>
  );
}

export default App;
