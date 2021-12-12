import React, {useState, useContext} from "react";

const StyleContext = React.createContext()

export const StyleProvider = ({children}) => {
    const [isLight, setIsLight] = useState(true)

    return (
        <StyleContext.Provider value={{
            isLight,
            setIsLight
        }}>
            {children}
        </StyleContext.Provider>
    )
}

export const useStyleContext = () => useContext(StyleContext)