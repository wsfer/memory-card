import { useState } from 'react';
import { useBestScore } from './hooks/useBestScore';
import { Header } from './components/Header/Header';
import { Scoreboard } from './components/Scoreboard/Scoreboard';
import { StartScreen } from './components/StartScreen/StartScreen';
import { GameScreen } from './components/GameScreen/GameScreen';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  const [score, setScore] = useState(null);
  const [difficulty, setDifficulty] = useState('normal');
  const [isGameOver, setIsGameOver] = useState(true);
  const bestScore = useBestScore(score);

  const handleStartGame = () => {
    setIsGameOver(false);
    setScore(0);
  };

  const handleGameOver = () => {
    setIsGameOver(true);
    setScore(null);
  };

  return (
    <>
      <Header handleClick={handleGameOver} />
      <Scoreboard currentScore={score} bestScore={bestScore} />
      {isGameOver ? (
        <StartScreen
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          startGame={handleStartGame}
        />
      ) : (
        <GameScreen
          difficulty={difficulty}
          gameOver={handleGameOver}
          score={score}
          setScore={setScore}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
