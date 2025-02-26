import { useState } from "react";
import { useAuth } from "../../context/auth/auth_context";
import { useNavigate } from "react-router-dom";
import './signup_form.css';

function SignUp({ setNewUser }) {
  const nav = useNavigate(); //Initializing useNavigate into a variable
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      alert("Passwords do not match");
    } else {
      await signUp(formData);
      nav("/dashboard");
    }
  }
  function handleClick() {
    setNewUser(false);
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className="signup_form">
      <div className="signupWrapper">
      <h2>SignUp</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="inputBox">
        
        <input
          type="text"
          name="name"
          id="name"
          placeholder="First and Last name"
          onChange={handleChange}
        />
        </div>
        <div className="inputBox">
        
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
        </div>
        <div className="inputBox">
        
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        </div>
        <div className="inputBox">
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        </div>
        <button className="btnSignUp" type="submit">Sign Up</button>
      
      <div className="register-link">
      <p>
        Already have an account? <button onClick={handleClick}>Sign In</button>
      </p>
      </div>
      </form>
      </div>
    </div>
  );
}
export default SignUp;
