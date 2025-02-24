import { useAuth } from "../../context/auth/auth_context";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Journals from "./Journals";

const Dashboard = () => {
  const [journals, setJournals] = useState();
  const nav = useNavigate();
  const { cookies, logout } = useAuth();

  function handleLogOut() {
    logout();
    nav("/auth");
  }

  // const payload = JSON.parse(atob(JSON.stringify(cookies).split(".")[1]));
  // console.log('payload'+JSON.stringify(payload.user.id));
  console.log("cookies" + JSON.stringify(cookies.token));
  async function getJournals() {
    try {
      const url = "http://localhost:3000/api/journal";
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-auth-token": cookies.token, // Include token in request
          "Content-Type": "application/json",
        },
      });
      const results = await res.json();
      // console.log("results" + JSON.stringify(results));
      setJournals(results);
    } catch (error) {
      console.error("Error showing dashboard", error);
    }
  }

  useEffect(() => {
    getJournals();
  }, []);
  return (
    <div>
      <h1> Only registered Users should see this page </h1>
      <Journals lists={journals}/>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};
export default Dashboard;
