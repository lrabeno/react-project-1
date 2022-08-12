import './App.css';
import { Nav } from './Nav';
import { CatFact } from './CatFact';
import { User } from './User';
import { Count } from './Count';
import { Planets } from './Planets';
import { Text } from './Text';
import { Todo } from './Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PredictAge } from './PedictAge';
import { Excuse } from './Excuse';

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
          <Route path="/text" element={<Text />} />
          <Route path="/catfact" element={<CatFact />} />
          <Route path="/predictage" element={<PredictAge />} />
          <Route path="/excuse" element={<Excuse />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
