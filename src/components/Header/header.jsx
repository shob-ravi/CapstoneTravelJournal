import {Link} from 'react-router-dom';
import './header.css';
function Header(){
    return(
        
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitlesm'>React & Node</span>
                <span className='headerTitleLg'>BLOG</span>
            </div> 
            <img className='headerImg' src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>          
        </div>
    )  
   
};
export default Header;