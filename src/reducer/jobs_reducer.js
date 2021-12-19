import {
    GET_ALL_JOBS,
    GET_JOB_DETAIL,
    SEARCH_JOBS,
    IS_LOADING,
    IS_ERROR } from "../helpers/actions";

export const jobs_reducer = (state, action) => {
    if (action.type === GET_ALL_JOBS) {
        return {
            ...state,
            jobs: action.payload,
            filteringJobs: action.payload,
            isLoading: false,
            isError: false
        }
    }

    if (action.type === GET_JOB_DETAIL) {
        return {
            ...state,
            jobDetail: action.payload,
            isLoading: false,
            isError: false
        }
    }

    if (action.type === SEARCH_JOBS) {
        const {searchTitle, searchLocation, isFullTime} = action.payload;

        return {
            ...state,
            filteringJobs: state.jobs.filter(
                item =>
                    item.position.toLowerCase().includes(searchTitle.toLowerCase()) &&
                    item.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
                    item.job_type.toLowerCase().includes(isFullTime.toLowerCase())
            )
        }
    }

    if (action.type === IS_LOADING) {
        return {
            ...state,
            isLoading: true,
            isError: false
        }
    }

    if (action.type === IS_ERROR) {
        return {
            isLoading: false,
            isError: true
        }
    }

}