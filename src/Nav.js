import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="nav">
      <Link to="/planets">Planets</Link>
      <Link to="/">Users</Link>
      <Link to="/count">Count</Link>
    </div>
  );
};
