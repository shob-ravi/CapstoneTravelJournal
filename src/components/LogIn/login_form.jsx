import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/auth_context";
import "./login_form.css";

function LoginForm({ setNewUser }) {
  const nav = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleClick(){
    setNewUser(true);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await login(formData);
    nav('/dashboard');
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
    <div className="loginpage">
      <div className="loginWrapper">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1>Login</h1>
          {/* <label>Email:</label> */}
          <div className="inputBox">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <i className='bx bxs-user'></i>
          </div>
          {/* <label>Password:</label> */}
          <div className="inputBox">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <i className='bx bxs-lock-alt'></i>
          </div>
          
          <button className="btn" type="submit">Login</button>
          <div className="register-link">
            <p>Dont have an account?<button onClick={handleClick}>Sign Up</button></p>
          </div>
        </form>
        
      </div>
      </div>
    </>
  );
}
export default LoginForm;
