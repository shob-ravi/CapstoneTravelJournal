import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/auth_context";

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
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1>Login Page</h1>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Log In</button>
        </form>
        <h1>Dont have an account?<button onClick={handleClick}>Sign Up</button></h1>
      </div>
    </>
  );
}
export default LoginForm;
