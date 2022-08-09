import './App.css';
// import { User } from './User';
import { useState } from 'react';

function App() {
  // const age = 17;
  // const isGreen = true;
  // const names = ['Pedro', 'Jake', 'Jessica', 'Mike', 'Dustin', 'Smoochy'];
  // const users = [
  //   { name: 'Pedro', age: 21 },
  //   { name: 'Jake', age: 25 },
  //   { name: 'Jessica', age: 45 },
  // ];
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState('');
  const [count, setCount] = useState(0);

  // const planets = [
  //   { name: 'Mars', isGasPlanet: false },
  //   { name: 'Earth', isGasPlanet: false },
  //   { name: 'Jupiter', isGasPlanet: true },
  //   { name: 'Venus', isGasPlanet: false },
  //   { name: 'Neptune', isGasPlanet: true },
  //   { name: 'Uranus', isGasPlanet: true },
  // ];
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
        <h1 style={{ color: textColor }}>hi my name is louieeee</h1>
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
      {/* <div>
        {planets.map((planet, idx) => {
          return planet.isGasPlanet ? <h1 key={idx}>{planet.name}</h1> : '';
        })}
      </div>
      {users.map((user, idx) => {
        return <User key={idx} name={user.name} age={user.age} />;
      })} */}
      {/* Conditional Rendering */}
      {/* {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{ color: isGreen ? 'green' : 'red' }}>This Has Color</h1>
      {isGreen && <button>True green button</button>} */}
      {/* Passing props with functions below */}
      {/* <User name="Louis" age={36} email="louis@louis.com" />
      <User name="pedro" age={21} email="pedro@pedro.com" />
      <User name="mike" age={37} email="mike@mike.com" />

      <Job salary={100} position="clerk" company="Google" />
      <Job salary={1000000000} position="boss" company="Facebook" />
      <Job salary={187498374987} position="dev" company="Twitter" /> */}
    </div>
  );
}

// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

// const Job = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   );
// };

export default App;
