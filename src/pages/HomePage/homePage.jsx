import { Link } from 'react-router-dom';
import './homePage.css';
export default function HomePage() {
  return (

      
    <div className="homePage">
    {/* <h1>Travel Journal</h1> */}
    <div className='homecontainer'>
        
        <div><img id="img" src="https://png.pngtree.com/recommend-works/png-clipart/20240708/ourmid/pngtree-travel-theme-masking-tape-png-image_13038636.png"></img></div>  
        <div><h2>Travel Journal</h2></div>    
        <div className="homePagenavbar"><Link to="/auth">Get Started</Link></div> 
    </div>
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
