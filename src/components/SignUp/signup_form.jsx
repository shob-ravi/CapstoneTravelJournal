import { useState } from "react";
import { useAuth } from "../../context/auth/auth_context";
import { useNavigate} from 'react-router-dom';

function SignUp({ setNewUser }) {
    const nav = useNavigate(); //Initializing useNavigate into a variable
    const {signUp} = useAuth();
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    });

  async function handleSubmit(e) {
    e.preventDefault();
    if (password != confirmPassword) {
        alert("Passwords do not match");
    }
    else {
        await signUp(formData);
  }
  function handleClick() {
    setNewUser(false);
  }
  function handleChange(e){
    setFormData({...formData,[e.taget.name]:e.target.value})
  }
  return (
    <div className="signup_form">
      <h2>SignUp</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First and Last name"
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <button onClick={handleClick}>Sign In</button>
      </p>
    </div>
  );
}
export default SignUp;
