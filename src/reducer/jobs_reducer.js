import {GET_ALL_JOBS} from "../helpers/actions";

export const jobs_reducer = (state, action) => {
    if (action.type === GET_ALL_JOBS) {
        return {
            ...state,
            jobs: action.payload
        }
    }
}