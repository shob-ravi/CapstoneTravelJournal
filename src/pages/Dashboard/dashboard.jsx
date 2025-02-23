import { useAuth } from "../../context/auth/auth_context";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const nav = useNavigate();
    const {logout} = useAuth();

    function handleLogOut(){
        logout();
        nav('/auth');
    }
    return(
        <div>
            <h1> Only registered Users should see this page </h1>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    );
};
export default Dashboard;