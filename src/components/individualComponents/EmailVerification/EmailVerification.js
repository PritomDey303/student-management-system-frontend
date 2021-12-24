import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextProvider } from "../../../App";
import Footer from "../../sharedComponents/Footer/Footer";
import Navigation from "../../sharedComponents/Navigation/Navigation";

const Emailverification = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [api] = useContext(ContextProvider);
  const { token } = useParams();

  const realToken = token.slice(0, token.length - 1);
  console.log(realToken);
  const role = parseInt(token.slice(token.length - 1, token.length));
  const handleVerification = () => {
    let url = "";
    if (role === 1) {
      url = `${api}/signup/verificationadmin`;
    } else {
      url = `${api}/signup/verificationstudent`;
    }

    setClick(!click);
    const tokenObj = {
      token: realToken,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    };
    //calling api
    axios
      .post(url, tokenObj, config)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.msg);
          setSuccessMsg(res.data.msg);
          setErrorMsg("");
        } else {
          setErrorMsg(res.data.msg);
          setSuccessMsg("");
        }
        setTimeout(() => {
          navigate("/");
        }, 7000);
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMsg("Sorry! Something went wrong.");
        setSuccessMsg("");
        setTimeout(() => {
          navigate("/");
        }, 7000);
      });
  };
  return (
    <>
      <Navigation />
      <div className="email-verify" style={{ height: "40vh" }}>
        {!click && (
          <h1 className="text-green text-center mt-3 mb-1">
            Verify your Email
          </h1>
        )}
        {!click && (
          <button
            className="btn btn-warning btn-lg  d-block mx-auto mt-3"
            onClick={() => handleVerification()}
          >
            Verify
          </button>
        )}
        {successMsg !== "" && (
          <h2 className="mt-4 text-center mx-auto w-75 text-success">
            {successMsg}
          </h2>
        )}
        {errorMsg !== "" && (
          <h2 className="mt-4 text-center mx-auto w-75 text-danger">
            {errorMsg}
          </h2>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Emailverification;
