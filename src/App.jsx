import AuthPage from "./pages/Auth/AuthPage.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import UpdateJournal from "./pages/UpdateJournal/updatejournal.jsx";
import Navbar from "./components/NavBar/navbar.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import CreateJournal from "./pages/CreateJournal/createjournals.jsx";
import 'boxicons/css/boxicons.min.css';
import "./App.css";
import HomePage from "./pages/HomePage/homePage.jsx";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <h2>Travel Journal</h2> */}
      <Routes>
        {/* <Route path="/Home" element={<HomePage />} /> */}
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/journal" element={<CreateJournal/>}/>
        <Route path='/updateJournal/:_id' element={<UpdateJournal/>}/>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
