import React, { createContext, useState } from "react";
import {getAuth} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await getAuth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            if (e.code === "auth/wrong-password") {
              alert("Wrong password try again!");
            }
            if (e.code === "auth/user-not-found") {
              alert("No user registered with that email");
            }
          }
        },
        register: async (email, password) => {
          try {
            await getAuth().createUserWithEmailAndPassword(email, password);
            // .then(()=>{
            //     console.log(auth().currentUser);
            // })
          } catch (e) {
            if (e.code === "auth/email-already-in-use") {
              alert("Email id already used");
            }

            if (e.code === "auth/invalid-email") {
              alert("Invalid-email !");
            }

            console.error(e);
          }
        },
        logout: async () => {
          try {
            await getAuth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
        updatePassword: async (Password) => {
          try {
            await getAuth()
              .currentUser.updatePassword(Password)
              .then(() => {
                alert("Password Change Sucessfully.");
              });
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}{" "}
    </AuthContext.Provider>
  );
};
