import * as actionType from './actionTypes';

const initialState = [];

export const profileSlice = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PROFILE_TO_STORE:
      return [...state, action.data];
    case actionType.EDIT_PROFILE_IN_STORE:
      let temp1 = state.filter(item => item.id != action.data.id);
      return [...temp1, action.data];
    case actionType.DELETE_PROFILE_FROM_STORE:
      let temp2 = state.filter(item => item.id != action.data.id);
      return [...temp2];
    case actionType.SET_ALL_PROFILES:
      return [...action.data];
    default:
      return state;
  }
};
