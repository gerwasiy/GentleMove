import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        setCurrentUser(userCredential.user);
      }
    );
  }

  function login(email, password) {
    signInWithEmailAndPassword(email, password);
  }

  const value = {
    currentUser,
    setCurrentUser,
    login,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
