import React, {useContext, useReducer, useState} from "react";
import {jobs_reducer} from "../reducer/jobs_reducer";
import axios from "axios";
import {useStyleContext} from "./style_context";
import {
    GET_ALL_JOBS,
    GET_JOB_DETAIL,
    SEARCH_JOBS,
    IS_LOADING,
    IS_ERROR
} from "../helpers/actions";

const JOBS_URL = 'https://dewjobs-web-app.herokuapp.com/api/jobs/'

const initialState = {
    jobs: [],
    filteringJobs: [],
    jobDetail: {},
    isLoading: false,
    isError: false
}

const JobsContext = React.createContext()

export const JobsProvider = ({children}) => {
    const [state, dispatch] = useReducer(jobs_reducer, initialState)
    const [searchTitle, setSearchTitle] = useState('')
    const [searchLocation, setSearchLocation] = useState('')
    const [isFullTime, setIsFullTime] = useState('')
    const [sliceEnd, setSliceEnd] = useState(6)
    const {setIsAutocomplete, setIsChecked} = useStyleContext()

    const getAllJobs = async () => {
        try {
            dispatch({
                type: IS_LOADING
            })
            const response = await axios.get(JOBS_URL)
            dispatch({
                type: GET_ALL_JOBS,
                payload: response.data
            })
        } catch (e) {
            dispatch({
                type: IS_ERROR
            })
        }
    }

    const getJobDetail = async (id) => {
        try {
            dispatch({
                type: IS_LOADING
            })
            const response = await axios.get(`https://dewjobs-web-app.herokuapp.com/api/jobs/${id}/`)
            dispatch({
                type: GET_JOB_DETAIL,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: IS_ERROR
            })
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

    const fullTimeHandler = () => {
        setIsChecked(true)
        setIsFullTime('full')
    }

    const emptyFullTimeHandler = () => {
        setIsChecked(false)
        setIsFullTime('')
    }

    const locationHandler = (e) => {
        const location = e.target.value
        setSearchLocation(location)
        setIsAutocomplete(true)
        if (location.length === 0) {
            setIsAutocomplete(false)
        }
    }

    const clearValuesHandler = () => {
        setSearchTitle('')
        setSearchLocation('')
        setIsFullTime('')
        setIsChecked(false)
        setIsAutocomplete(false)
        setSliceEnd(6)
    }

    return (
        <JobsContext.Provider
            value={{
                ...state,
                getAllJobs,
                getJobDetail,
                searchJobs,
                locationHandler,
                searchTitle,
                setSearchTitle,
                setSearchLocation,
                searchLocation,
                setIsFullTime,
                fullTimeHandler,
                emptyFullTimeHandler,
                clearValuesHandler,
                sliceEnd,
                setSliceEnd
            }}>
            {children}
        </JobsContext.Provider>
    )
}

export const useJobsContext = () => useContext(JobsContext)