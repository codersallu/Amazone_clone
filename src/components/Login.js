import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

const Login = () => {
  const{ history }= useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const loginUser = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(userEmail, userPassword)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

//aditional method for signup check but not working.
  const signupUser =(props)=> async function registerWithEmailAndPassword(
    userEmail,
    userPassword,
   ) {
    const credentials = await auth()
     .createUserWithEmailAndPassword(userEmail, userPassword);
    this.sendEmailVerification(credentials.user)
    .then((auth) => {
           history.push("/");
           })
          .catch((e) => alert(e.message));;
    return credentials.user;
   }




  // const signupUser = (e) => {
  //   e.preventDefault();
  //   auth.createUserWithEmailAndPassword(userEmail, userPassword)
  //     .then((auth) => {
  //       history.push("/");
  //     })
  //     .catch((e) => alert(e.message));
  // };
  return (
    <div className="login">
      <Link>
        <img
          className="login__logo"
          src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
          />
          <h5>password</h5>
          <input
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            type="password"
          />
          <button
            onClick={loginUser}
            type="submit"
            className="login__signinButton"
          >
            Sign In
          </button>
        </form>
        <p>By signing-In, You agree to Amazon's Terms and condition</p>
        <button onClick={signupUser} className="login__RegisterButton">
          Create Your Account
        </button>
      </div>
    </div>
  );
};

export default Login;
