import React, {useState, useContext} from "react";

const StyleContext = React.createContext()

export const StyleProvider = ({children}) => {
    const [isLight, setIsLight] = useState(true)
    const [isModal, setIsModal] = useState(false)

    return (
        <StyleContext.Provider value={{
            isLight,
            setIsLight,
            isModal,
            setIsModal
        }}>
            {children}
        </StyleContext.Provider>
    )
}

export const useStyleContext = () => useContext(StyleContext)