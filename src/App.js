import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/individualComponents/Home/Home";
import Profile from "./components/individualComponents/Profile/Profile";
import Students from "./components/individualComponents/Students/Students";

function App() {
  const [LoggedInUser, setLogggedInUser] = useState({});
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
