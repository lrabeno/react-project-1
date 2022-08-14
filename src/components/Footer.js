import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/menu">Menu</Link>
    </div>
  );
};
