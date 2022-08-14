import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/menu">Menu</Link>
    </div>
  );
};
