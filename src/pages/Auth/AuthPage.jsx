import {useState} from 'react';
import SignUp from '../../components/SignUp/signup_form.jsx';
import LogInForm from '../../components/LogIn/login_form.jsx';

const Auth = () =>{
    const[newUser, setNewUser] = useState(false);
    return(
        <>
        {
            newUser ? (<SignUp setNewUser={setNewUser}/>)
             : (<LogInForm setNewUser={setNewUser}/>)
        }
        </>
    )

}
export default Auth;
