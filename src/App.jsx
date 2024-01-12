import { useState } from 'react';
import { useBestScore } from './hooks/useBestScore';
import { Header } from './components/Header/Header';
import { Scoreboard } from './components/Scoreboard/Scoreboard';
import { StartScreen } from './components/StartScreen/StartScreen';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  const [score, setScore] = useState(null);
  const [difficulty, setDifficulty] = useState('normal');
  const bestScore = useBestScore(score);

  const handleStartGame = () => {};

  return (
    <>
      <Header />
      <Scoreboard currentScore={score} bestScore={bestScore} />
      <StartScreen
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        startGame={handleStartGame}
      />
      <Footer />
    </>
  );
}

export default App;
