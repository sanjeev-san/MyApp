import * as actionType from './actionTypes';

const initialState = [];

export const profileSlice = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PROFILE_TO_STORE:
      //can write other logic to manipulate state and data
      return [...state, action.data];
    case actionType.SET_ALL_PROFILES:
      return [...action.data];
    default:
      return state;
  }
};
