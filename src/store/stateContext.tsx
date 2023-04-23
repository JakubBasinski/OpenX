import React, { useState } from 'react';

interface StateContextI {
  set
}

const StateContext = React.createContext<StateContextI>({


});

type Props = {
  children: React.ReactNode;
};

export const DisplayContextProvider = ({ children }: Props) => {
  const contextValue = {};

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export default DisplayContext;
