import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../pages/Login/firebase.init";


initializeAuthentication();

const useFirebase=()=>{
    const[users,setUsers]=useState({});
    const auth = getAuth();
   const signInWithEmailAndPassword=(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUsers(user);
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      // ..
    });
   };

   return {
       users,
       signInWithEmailAndPassword
   }

}
export default useFirebase;