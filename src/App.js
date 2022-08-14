import './App.css';
import { Nav } from './components/Nav';
import { CatFact } from './components/CatFact';
import { User } from './components/User';
import { Count } from './components/Count';
import { Planets } from './components/Planets';
import { Text } from './components/Text';
import { Todo } from './components/Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PredictAge } from './components/PedictAge';
import { Excuse } from './components/Excuse';
import { Error } from './components/Error';
import { StateManagement } from './components/StateManagement';
import { Footer } from './components/Footer';

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
          <Route path="/statemanagement" element={<StateManagement />} />
          <Route path="/excuse" element={<Excuse />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
