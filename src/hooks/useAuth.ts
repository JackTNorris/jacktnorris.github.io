import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../loaders/firebase";

export function useAuth() {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) =>
        setCurrentUser(user)
      );
      return unSubscribe;
    }, []);
    return currentUser;
}