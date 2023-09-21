import { Children, createContext, useState } from "react";


 const userType = createContext()

const UserContext = ()=> {
    const [userId, setUserId] = useState('')
    return(
        <userType.Provider value={{userId, setUserId}}>
            {Children}
        </userType.Provider>
    )
}

export default {userType, UserContext}