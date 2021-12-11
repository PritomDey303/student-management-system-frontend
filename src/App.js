import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./components/individualComponents/Home/Home";
import Profile from "./components/individualComponents/Profile/Profile";
import Students from "./components/individualComponents/Students/Students";
import PrivateRoute from "./components/utilityComponents/PrivateRoute/PrivateRoute";
import SignUpPage from "./components/utilityComponents/SignUpPage/SignUpPage";
export const ContextProvider = createContext();

function App() {
  // Backend main api url

  const api = "http://localhost:5000";

  const [LoggedInUser, setLogggedInUser] = useState({});

  //get LoggedInUser info
  useEffect(() => {
    axios
      .get(`http://localhost:5000/students/singlestudent`, {
        withCredentials: true,
      })
      .then(function (response) {
        // handle success
        setLogggedInUser(response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log(LoggedInUser);
  return (
    <div className="App">
      <ContextProvider.Provider value={[api, LoggedInUser, setLogggedInUser]}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/" element={<PrivateRoute />}>
              <Route path="/students" element={<Students />} />
            </Route>
            <Route exact path="/profile/:id" element={<PrivateRoute />}>
              <Route path="/profile/:id" element={<Profile />} />
            </Route>
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider.Provider>
    </div>
  );
}

export default App;
