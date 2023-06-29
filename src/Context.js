import { createContext, useState, useContext, useEffect } from "react";
export const Mycontext = createContext();

const Context = ({ children }) => {
    const Acess_key = "d1c9a9af41297f93b7ade6e2e96a03fd";
    const [query, setquery] = useState("");

    return (
        <Mycontext.Provider value={{ query, setquery, Acess_key }}>
            {children}
        </Mycontext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Mycontext);
}

export default Context
export { useGlobalContext }


