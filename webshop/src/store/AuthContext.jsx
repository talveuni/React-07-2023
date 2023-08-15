import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(checkIfLoggedIn());

    function checkIfLoggedIn() {
      if(sessionStorage.getItem("id_token") !== null &&
        sessionStorage.getItem("refresh_token") !== null) {
          return true;
      } else {
          return false;
      }
    }
      
    return (
      <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
        {children}
      </AuthContext.Provider>
    );
  }
