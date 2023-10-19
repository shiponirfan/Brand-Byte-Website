import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { createContext, useEffect, useState } from "react";
// import { HelmetProvider } from "react-helmet-async";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // useEffect(()=>{
  //   AOS.init({duration: 1000,delay: 300,});
  // },[])

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // SignIn With Email & Password
  const signIn = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login With Email & Password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login With Google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  // user's profile
  const userProfile = (name, profileUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profileUrl,
    })
      .then(() => {
        setUser(auth.currentUser);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Logged In Users
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    signIn,
    logIn,
    googleLogin,
    logOut,
    loading,
    userProfile,
  };
  return (
    // <HelmetProvider>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    // </HelmetProvider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
