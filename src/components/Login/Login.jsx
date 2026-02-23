import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGgSignIn = () => {
    console.log("sign in btn clicked");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      {/*
    <button onClick={handleGgSignIn}>Sign in with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGgSignIn}>Sign in with Google</button>
          <button onClick={handleGitSignIn}>Sign in with GitHub</button>
        </>
      )}

      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
