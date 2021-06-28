import {intialStateType, actionType} from '../types/Types';
import {START_FETCHING, END_FECTCHING, LOAD_MORE} from '../action/JokesAction';

export const JokeReducer = (state: intialStateType, action: actionType) => {
  switch (action.type) {
    case START_FETCHING:
      return {...state, loading: true};
    case END_FECTCHING:
      return {
        ...state,
        loading: false,
        jokes: state.jokes.concat(action.payload),
      };
    case LOAD_MORE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      throw new Error();
  }
};

