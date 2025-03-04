import { useAuth } from "../../context/auth/auth_context.jsx";
import { useState, useEffect } from "react";
import Journals from "./Journals/Journals.jsx";
import "./dashboard.css";

const Dashboard = () => {
  const [journals, setJournals] = useState();
  const { cookies } = useAuth();

  // const payload = JSON.parse(atob(JSON.stringify(cookies).split(".")[1]));
  // console.log('payload'+JSON.stringify(payload.user.id));
  // console.log("cookies" + JSON.stringify(cookies.token));
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
    <div className="dashboard">
      {/* <h1> Manage Journals </h1> */}
      <div className="lists">
        <Journals lists={journals} getJournals={getJournals} />
      </div>
    </div>
  );
};
export default Dashboard;
