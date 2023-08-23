import React, {createContext, useState} from 'react';

export const AllGamesContext = createContext();

export function AllGamesContextProvider({ children }) {

    const [allGames, setAllGames] = useState([]);
       
    return (
      <AllGamesContext.Provider value={{allGames, setAllGames }}>
        {children}
      </AllGamesContext.Provider>
    );
  }
