import { Title } from '../Title/Title';
import { Container } from '../Container/Container';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <Container>
        <a href="#" className="header__logo">
          <Title />
        </a>
      </Container>
    </header>
  );
}
