import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);
      
    return (
      <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
        {children}
      </AuthContext.Provider>
    );
  }
