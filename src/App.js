import './App.css';
import { Nav } from './pages/Nav';
import { CatFact } from './pages/CatFact';
import { User } from './pages/User';
import { Count } from './pages/Count';
import { Planets } from './pages/Planets';
import { Text } from './pages/Text';
import { Todo } from './pages/Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PredictAge } from './pages/PedictAge';
import { Excuse } from './pages/Excuse';
import { Error } from './pages/Error';
import { StateManagement } from './pages/StateManagement';
import { Footer } from './pages/Footer';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Menu } from './pages/Menu';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState('Louis Rabeno');
  return (
    /* QueryClientProvider is from react query. Put it on the top
       level of the app so every component has access to the client 
       variable above.
    */
    <QueryClientProvider client={client}>
      <AppContext.Provider value={{ username, setUsername }}>
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
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
