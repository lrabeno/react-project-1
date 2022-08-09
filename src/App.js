import './App.css';
import { Nav } from './Nav';
import { User } from './User';
import { Count } from './Count';
import { Planets } from './Planets';
import { Todo } from './Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/count" element={<Count />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
