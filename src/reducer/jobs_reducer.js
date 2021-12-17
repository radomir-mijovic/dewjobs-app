import {GET_ALL_JOBS, SEARCH_JOBS, IS_LOADING} from "../helpers/actions";

export const jobs_reducer = (state, action) => {
    if (action.type === GET_ALL_JOBS) {
        return {
            ...state,
            jobs: action.payload,
            filteringJobs: action.payload,
            isLoading: false
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
            isLoading: true
        }
    }
}