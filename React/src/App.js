import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import HomePage from "./Homepage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import MembersPage from "./MembersPage";
import LogoutPage from "./Logoutpage";
function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <BrowserRouter>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Routes>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/members" element={<MembersPage />} />
          <Route path="/logout" element={<LogoutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
