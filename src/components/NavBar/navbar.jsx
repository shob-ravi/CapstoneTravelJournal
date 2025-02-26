import {Link} from 'react-router-dom';
import './navbar.css';
function Navbar(){
    return(
        
        <nav className='navbar'>
            <div className='topleft'>
        <img id="img" src="https://png.pngtree.com/recommend-works/png-clipart/20240708/ourmid/pngtree-travel-theme-masking-tape-png-image_13038636.png"></img>

            </div>
            <div className='topcenter'>center</div>
            <div className='topright'>
            <Link to='/auth'>Get Started</Link>
            </div>
           
        </nav>
    )  
    // <Link to='/auth'>Start to Explore</Link>
};
export default Navbar;