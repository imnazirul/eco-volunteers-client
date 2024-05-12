import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [reload, setReload] = useState(true);
  const axiosSecure = useAxiosSecure();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateRegisterProfile = (displayName, photoURL) => {
    setLoading(false);
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state changed on", currentUser);
      setUser(currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      if (currentUser) {
        axiosSecure
          .post("/jwt", loggedUser)
          .then((res) => console.log(res.data));
      } else {
        axiosSecure
          .post("logout", loggedUser)
          .then((res) => console.log(res.data));
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, [reload, axiosSecure, user?.email]);

  const authInfo = {
    createUser,
    loading,
    setLoading,
    updateRegisterProfile,
    user,
    setReload,
    reload,
    logOut,
    signIn,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
