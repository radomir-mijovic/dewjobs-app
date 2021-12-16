import React, {useContext, useReducer} from "react";
import {jobs_reducer} from "../reducer/jobs_reducer";
import axios from "axios";
import {GET_ALL_JOBS} from "../helpers/actions";

const JobsUrl = 'http://127.0.0.1:8000/api/jobs/'

const initialState = {
    jobs: []
}

const JobsContext = React.createContext()

export const JobsProvider = ({children}) => {
    const [state, dispatch] = useReducer(jobs_reducer, initialState)

    const getAllJobs = async () => {
      try {
          const response = await axios.get(JobsUrl)
          dispatch({
              type: GET_ALL_JOBS,
              payload: response.data
          })
          console.log(response.data)
      }
      catch (e) {
          console.log(e)
      }
    }

    return (
        <JobsContext.Provider value={{
            ...state,
            getAllJobs
        }}>
            {children}
        </JobsContext.Provider>
    )
}

export const useJobsContext = () => useContext(JobsContext)