import { Link } from "react-router-dom";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/auth_context";

const Navbar = () => {
  const { cookies, logout } = useAuth();
  const nav = useNavigate();

  function handleLogOut() {
    logout();
    // nav("/auth");
  }
  return (
    <nav className="navbar">
      <div className="topleft">
        <img
          className="topleftimg"
          src="https://png.pngtree.com/recommend-works/png-clipart/20240708/ourmid/pngtree-travel-theme-masking-tape-png-image_13038636.png"
        ></img>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <Link to="/Home" onClick={handleLogOut} className="topList-link">
            HOME
          </Link>
          <Link to="/" className="topList-link">
            ABOUT   
          </Link>
          <Link to="/" className="topList-link">
            CONTACT
          </Link>
        </ul>
      </div>
      <div className="topright">
        <Link to="/auth" onClick={handleLogOut} className="getstarted-link">
          GET STARTED
        </Link>
        <img
          className="toprightimg"
          src="https://png.pngtree.com/png-vector/20210902/ourmid/pngtree-get-started-poster-png-image_3852591.jpg"
        ></img>
        {cookies.token && (
          <Link to="/auth" className="getstarted-link">
            <button onClick={handleLogOut}>LOG OUT</button>
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
