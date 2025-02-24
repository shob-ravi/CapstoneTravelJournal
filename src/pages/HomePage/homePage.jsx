import { Link } from "react-router-dom";
import './homePage.css';
export default function HomePage() {
  return (
    <div className="homePage">
      <nav className="navbar">
        <Link to="/auth">Get Started</Link>
        
      </nav>
    <div className="heroSection"> 
      <nav className="hero-text">
    <Link to="/auth">Start to Explore</Link>
    </nav>
    </div>
    <div className="favorites"></div>
    <div className="footer"></div>
    </div>
    
  );
}
