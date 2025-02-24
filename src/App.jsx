import AuthPage from "./pages/Auth/AuthPage.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import Navbar from "./components/NavBar/navbar.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import 'boxicons/css/boxicons.min.css';
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <h2>Travel Journal</h2>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
