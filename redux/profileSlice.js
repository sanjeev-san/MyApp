import * as actionType from './actionTypes';

const initialState = [];

export const profileSlice = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PROFILE_TO_STORE:
      return [...state, action.data];
    case actionType.DELETE_PROFILE_FROM_STORE:
      console.log('store update');
      let temp = state.filter(item => item.id != action.data.id);
      return [...temp];
    case actionType.SET_ALL_PROFILES:
      return [...action.data];
    default:
      return state;
  }
};
