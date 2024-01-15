import './Loading.css';

// Parent component must have position: relative
export function Loading({ message }) {
  return (
    <div aria-label="Loading" className="loading">
      <div className="loading__animation-container">
        <div className="loading__dot loading__first-dot"></div>
        <div className="loading__dot loading__second-dot"></div>
        <div className="loading__dot loading__third-dot"></div>
      </div>
      <p className="loading__message">{message}</p>
    </div>
  );
}
