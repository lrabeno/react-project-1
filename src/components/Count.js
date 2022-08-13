import { useState } from 'react';

export const Count = () => {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState('');
  const [count, setCount] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const decreaseAge = () => {
    setAge(age - 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      Age: {age}
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={decreaseAge}>Decrease Age</button>
      <input type="text" onChange={handleInputChange} />
      {inputValue}
      {showText ? (
        <h1 style={{ color: textColor }}>
          Click show/hide to hide me. Or change the color!
        </h1>
      ) : (
        ''
      )}{' '}
      <button onClick={() => setShowText(!showText)}>Show/Hide</button>
      <button
        onClick={() => setTextColor(textColor === 'red' ? 'black' : 'red')}
      >
        Change color
      </button>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>
    </div>
  );
};
