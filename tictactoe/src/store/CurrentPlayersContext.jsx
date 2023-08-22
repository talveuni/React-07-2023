import React, {createContext, useState} from 'react';

export const CurrentPlayersContext = createContext();

export function CurrentPlayersContextProvider({ children }) {

    const [playerX, setPlayerX] = useState("X");
    const [playerO, setPlayerO] = useState("O");
    
    
    return (
      <CurrentPlayersContext.Provider value={{ playerX, playerO, setPlayerX, setPlayerO }}>
        {children}
      </CurrentPlayersContext.Provider>
    );
  }
