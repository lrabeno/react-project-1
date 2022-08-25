import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="nav">
      <Link to="/planets">Planets</Link>
      <Link to="/">Users</Link>
      <Link to="/count">Count</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/text">Text</Link>
      <Link to="/catfact">Cat fact</Link>
      <Link to="/predictage">Predict Age</Link>
      <Link to="/excuse">Excuse</Link>
      <Link to="/statemanagement">State management</Link>
      <Link to="/forms">Forms</Link>
      <Link to="custom">Custom Hook</Link>
    </div>
  );
};
