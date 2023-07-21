import { createContext, useState, useContext } from "react";
export const Mycontext = createContext();

const Context = ({ children }) => {
    const Acess_key = "d1c9a9af41297f93b7ade6e2e96a03fd";
    const [query, setquery] = useState("");
    const [HeroSectionArray1, setHeroSectionArray1] = useState(null);
    const [HeroSectionArray2, setHeroSectionArray2] = useState(null);
    const [HeroSectionArray3, setHeroSectionArray3] = useState(null);
    return (
        <Mycontext.Provider value={{ query, setquery, Acess_key, HeroSectionArray1, setHeroSectionArray1, HeroSectionArray2, setHeroSectionArray2, HeroSectionArray3, setHeroSectionArray3 }}>
            {children}
        </Mycontext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Mycontext);
}

export default Context
export { useGlobalContext }


