import * as actionType from './actionTypes';

const initialState = [];

export const profileSlice = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PROFILE:
      return [...state, action.data];
    default:
      return state;
  }
};
