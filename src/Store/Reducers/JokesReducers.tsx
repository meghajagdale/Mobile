import { JOKES_SUCCESS, JOKES_ERROR } from '../ActionType'

const defaultState = {
    contacts: [],
    error: undefined
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case JOKES_SUCCESS: {
            return {
                ...state,
                error: undefined,
                contacts: action.payload
            }
        }
        case JOKES_ERROR: {
            return { ...state, contacts: [], error: action.payload }
        }
        default:
            return state
    }
}
