import './DifficultySelector.css';

export function DifficultySelector({ difficulty, handleChange }) {
  return (
    <div className="difficulty-selector">
      <RadioInput
        inputValue="easy"
        selectedValue={difficulty}
        onChange={handleChange}
      />
      <RadioInput
        inputValue="normal"
        selectedValue={difficulty}
        onChange={handleChange}
      />
      <RadioInput
        inputValue="hard"
        selectedValue={difficulty}
        onChange={handleChange}
      />
    </div>
  );
}

function RadioInput({ inputValue, selectedValue, onChange }) {
  return (
    <div className="difficulty-selector__input-container">
      <input
        className="difficulty-selector__input"
        type="radio"
        id={inputValue}
        name="difficulty"
        value={inputValue}
        checked={selectedValue === inputValue}
        onChange={onChange}
      />
      <label className="difficulty-selector__label" htmlFor={inputValue}>
        {inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}
      </label>
    </div>
  );
}
