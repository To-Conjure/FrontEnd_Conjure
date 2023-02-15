import {useContext, useState} from "react";
import Context from "./Context";

const ContextProvider = ({children}) => {
    const [users,setUsers] = useState(null)
    const values = {
        users,
        setUsers,
    }
    return (
        <>
        <Context.Provider value = {values}>
            {children}
        </Context.Provider>
        </>
    )
}

export default ContextProvider