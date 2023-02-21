import React, { useState } from 'react';
import Context from "./Context";

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const values = {
        user,
        setUser,
    };
  
    return (
      <Context.Provider value={ values }> 
        {children}
      </Context.Provider>
    );
  }
  export default ContextProvider;