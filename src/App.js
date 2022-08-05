import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Louis" age={36} email="louis@louis.com" />
      <User name="pedro" age={21} email="pedro@pedro.com" />
      <User name="mike" age={37} email="mike@mike.com" />

      <Job salary={100} position="clerk" company="Google" />
      <Job salary={1000000000} position="boss" company="Facebook" />
      <Job salary={187498374987} position="dev" company="Twitter" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
