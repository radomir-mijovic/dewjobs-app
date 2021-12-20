import React, {useState, useContext} from "react";

const StyleContext = React.createContext()

export const StyleProvider = ({children}) => {
    const [isLight, setIsLight] = useState(JSON.parse(localStorage.getItem('setTheme')))
    const [isModal, setIsModal] = useState(false)
    const [isAutocomplete, setIsAutocomplete] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    localStorage.setItem('setTheme', JSON.stringify(isLight))

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