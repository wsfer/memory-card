import { Title } from '../Title/Title';
import { Container } from '../Container/Container';
import './Header.css';

export function Header({ handleClick }) {
  return (
    <header className="header">
      <Container>
        <a href="#" className="header__logo" onClick={handleClick}>
          <Title />
        </a>
      </Container>
    </header>
  );
}
