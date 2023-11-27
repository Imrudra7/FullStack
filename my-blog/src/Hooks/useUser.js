import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoadingg] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setIsLoadingg(false);
    });
    return () => unsubscribe; //cleanup function to remove the listener when this component is destroyed.
  }, []);

  return {
    user,
    isLoading,
  };
};

export default useUser;
