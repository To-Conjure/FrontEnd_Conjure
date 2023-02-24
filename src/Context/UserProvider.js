import React, {useState, useEffect } from "react";
import UserContext from "./userContext"

export default function UserProvider( props ) {
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('c-token'))
      if(token && token.user.id) {
        console.log(token)
          fetch(`http://localhost:3010/users/${token.user.id}`).then((res) => res.json()).then((json) => {
            setUser(json)
          })
      } else {
          setUser(undefined)
      }
  }, [])


  const values = {
    user,
    setUser,
  }

  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  );
};