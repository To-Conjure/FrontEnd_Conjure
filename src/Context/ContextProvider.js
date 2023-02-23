import React, { useState } from 'react';
import Context from "./Context";

const ContextProvider = ({ children }) => {
    const [isMusic, setMusic] = useState(false)
    const values = {
        isMusic,
        setMusic
    };
  
    return (
      <Context.Provider value={ values }> 
        {children}
      </Context.Provider>
    );
  }
  export default ContextProvider;