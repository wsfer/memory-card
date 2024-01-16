import { useFetch } from '../../hooks/useFetch';
import { captalizeString } from '../../utils/capitalizeString';
import { Loading } from '../Loading/Loading';
import cardback from '../../assets/cardback.jpg';
import './Card.css';

export function Card({ url, handleClick, flip }) {
  const { data, loading, error } = useFetch(url);

  return (
    <button
      className={loading || flip ? 'card card--flipped-back' : 'card'}
      onClick={handleClick}
    >
      <div className="card__inner">
        {loading ? (
          <Loading message={error} />
        ) : (
          <div className="card__front">
            <h3 className="card__front-title">{captalizeString(data.name)}</h3>
            <img
              className="card__front-image"
              src={data.sprites.front_default}
              alt={data.name}
            />
          </div>
        )}
        <div aria-hidden="true" className="card__back">
          <img src={cardback} alt="cardback" />
        </div>
      </div>
    </button>
  );
}
