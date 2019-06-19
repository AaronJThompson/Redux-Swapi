import { actionTypes } from "../actions";
const initialState = {
  characters: [],
  fetching: true,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case(actionTypes.FETCHING):
      return { ...state, fetching: true};
    case (actionTypes.SUCCESS):
      return { ...state, characters: action.payload, fetching: false };
    case (actionTypes.FAILURE):
      return { ...state, error: action.payload, fetching: false};
    default:
      return state;
  }
};
