import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import { DifficultySelector } from './DifficultySelector';

export function StartScreen({ difficulty, setDifficulty, startGame }) {
  const handleChange = (event) => setDifficulty(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    startGame();
  };

  return (
    <main className="startscreen">
      <Container>
        <h1 className="startscreen__title">
          <Title />
        </h1>
        <form
          className="startscreen__form"
          action="#"
          aria-label="Select difficulty"
          onSubmit={handleSubmit}
        >
          <DifficultySelector
            difficulty={difficulty}
            handleChange={handleChange}
          />
          <button className="startscreen__button">Start Game</button>
        </form>
      </Container>
    </main>
  );
}
