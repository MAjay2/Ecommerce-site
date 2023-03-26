import { createContext } from "react";

export const loginContext = createContext()

export function LoginContextProvider(props){
    const mickey = "leo"
    return (
        <loginContext.Provider value={{mickey}}>
            {props.children}
        </loginContext.Provider>
    )
}