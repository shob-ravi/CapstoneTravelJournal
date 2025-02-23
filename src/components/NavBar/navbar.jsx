import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <nav>
            <Link to='/auth'>Get Started</Link>
            <Link to='/auth'>Start to Explore</Link>
        </nav>
    )
};
export default Navbar;