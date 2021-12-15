import React, {useContext, useReducer} from "react";

const initialValues = {

}

const JobsContext = React.createContext()

export const JobsProvider = ({children}) => {

    return (
        <JobsContext.Provider value={{

        }}>
            {children}
        </JobsContext.Provider>
    )
}

export const useJobsContext = () => useContext(JobsContext)