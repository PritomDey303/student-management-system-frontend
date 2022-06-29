import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Route, Routes } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import Dashboard from "./components/individualComponents/Dashboard/Dashboard";
import Updatesingleresult from "./components/individualComponents/Dashboard/UpdateResult/UpdateSingleResult/UpdateSingleResult";
import Emailverification from "./components/individualComponents/EmailVerification/EmailVerification";
import Home from "./components/individualComponents/Home/Home";
import Profile from "./components/individualComponents/Profile/Profile";
import Students from "./components/individualComponents/Students/Students";
import PrivateRoute from "./components/utilityComponents/PrivateRoute/PrivateRoute";
import SignUpPage from "./components/utilityComponents/SignUpPage/SignUpPage";

export const ContextProvider = createContext();

function App() {
  //navigate hook
  const navigate = useNavigate();
  // Backend main api url

  const api = "https://csecustumanagesystem.herokuapp.com";

  const [LoggedInUser, setLoggedInUser] = useState({});
  //get current page location
  const location = useLocation();
  //keep login function

  //get LoggedInUser info
  useEffect(() => {
    //calling api
    axios
      .get(`${api}/authentication/keeplogin`, { withCredentials: true })
      .then((res) => {
        if (res.data.email && res.data.role) {
          setLoggedInUser(res.data);
          navigate(location.pathname);
        } else if (
          location.pathname === "/signup" ||
          location.pathname.includes("/verification")
        ) {
          navigate(location.pathname);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location.pathname, navigate]);

  return (
    <div className="App">
      <ToastProvider style={{ zIndex: "10000000" }}>
        <ContextProvider.Provider value={[api, LoggedInUser, setLoggedInUser]}>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/students" element={<PrivateRoute />}>
              <Route path="/students" element={<Students />} />
            </Route>

            <Route path="/profile/:id" element={<Profile />} />

            <Route path="/signup" element={<SignUpPage />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/updateresult/:id"
              element={<Updatesingleresult />}
            />

            <Route
              path="/verification/:token"
              element={<Emailverification />}
            />
          </Routes>
        </ContextProvider.Provider>
      </ToastProvider>
    </div>
  );
}

export default App;
