import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = ( props ) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('c-token'))
      if(token) {
          fetch(`http://localhost:3010/users/${token.user.id}`).then((res) => res.json()).then((json) => {
            setUser(json)
          })
      } else {
          setUser(undefined)
      }
  }, [])


  const context = {
    user,
    setUser,
  }

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};