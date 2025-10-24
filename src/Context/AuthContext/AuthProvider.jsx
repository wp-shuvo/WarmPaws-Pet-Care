import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  const [errorInvalid, setErrorInvalid] = useState('');

  // register new user ==>>
  const registerUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login USER ==>>
  const loginUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login With Google Account
  const singInWithGoogle = () => {
    // setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // SingOut or LogOut user
  const singOutUser = () => {
    setloading(true);
    return signOut(auth);
  };

  //Get Current User Info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log('in auth state change', currentUser);
      setUser(currentUser);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // update profile

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // forget password
  const forgetPassword = email => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    registerUser,
    loginUser,
    errorInvalid,
    setErrorInvalid,
    singInWithGoogle,
    singOutUser,
    loading,
    updateUserProfile,
    forgetPassword,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
