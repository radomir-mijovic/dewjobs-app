import React, {useContext, useReducer, useState} from "react";
import {jobs_reducer} from "../reducer/jobs_reducer";
import axios from "axios";
import {GET_ALL_JOBS, SEARCH_JOBS, IS_LOADING} from "../helpers/actions";
import {useStyleContext} from "./style_context";

const JobsUrl = 'http://127.0.0.1:8000/api/jobs/'

const initialState = {
    jobs: [],
    filteringJobs: [],
    isLoading: false
}

const JobsContext = React.createContext()

export const JobsProvider = ({children}) => {
    const [state, dispatch] = useReducer(jobs_reducer, initialState)
    const [searchTitle, setSearchTitle] = useState('')
    const [searchLocation, setSearchLocation] = useState('')
    const [isFullTime, setIsFullTime] = useState('')
    const {setIsAutocomplete} = useStyleContext()

    const getAllJobs = async () => {
        try {
            dispatch({
                type: IS_LOADING
            })
            const response = await axios.get(JobsUrl)
            dispatch({
                type: GET_ALL_JOBS,
                payload: response.data
            })
        } catch (e) {
            console.log(e)
        }
    }

    const searchJobs = () => {
        dispatch({
            type: SEARCH_JOBS,
            payload: {
                searchTitle,
                searchLocation,
                isFullTime
            }
        })
    }

    const locationHandler = (e) => {
        const location = e.target.value
        setSearchLocation(location)
        setIsAutocomplete(true)
        if (location.length === 0) {
            setIsAutocomplete(false)
        }
    }

    return (
        <JobsContext.Provider
            value={{
                ...state,
                getAllJobs,
                searchJobs,
                locationHandler,
                setSearchTitle,
                setSearchLocation,
                searchLocation,
                setIsFullTime
            }}>
            {children}
        </JobsContext.Provider>
    )
}

export const useJobsContext = () => useContext(JobsContext)