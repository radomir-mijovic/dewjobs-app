import React, {useState, useContext} from "react";

const StyleContext = React.createContext()

export const StyleProvider = ({children}) => {
    const [isLight, setIsLight] = useState(true)
    const [isModal, setIsModal] = useState(false)
    const [isAutocomplete, setIsAutocomplete] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    return (
        <StyleContext.Provider value={{
            isLight,
            setIsLight,
            isModal,
            setIsModal,
            isAutocomplete,
            setIsAutocomplete,
            isChecked,
            setIsChecked
        }}>
            {children}
        </StyleContext.Provider>
    )
}

export const useStyleContext = () => useContext(StyleContext)