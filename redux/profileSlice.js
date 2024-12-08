import * as actionType from './actionTypes';

const initialState = {
  profiles: [],
  loading: false,
  statusMessage: '',
};

export const profileSlice = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PROFILE_TO_STORE:
      return {
        ...state,
        profiles: [...state.profiles, action.data],
      };
    case actionType.EDIT_PROFILE_IN_STORE:
      let temp1 = state.profiles.filter(item => item.id != action.data.id);
      return {
        ...state,
        profiles: [...state.profiles, ...temp1],
      };
    case actionType.DELETE_PROFILE_FROM_STORE:
      let temp2 = state.profiles.filter(item => item.id != action.data.id);
      return {
        ...state,
        profiles: [...temp2],
      };
    case actionType.SET_ALL_PROFILES:
      return {
        ...state,
        profiles: [...action.data],
      };
    case actionType.SET_LOADING:
      state.loading = action.data;
      return {
        ...state,
        loading: action.data,
      };
    case actionType.SET_STATUS_MESSAGE:
      state.statusMessage = action.data;
      return {
        ...state,
        statusMessage: action.data,
      };
    default:
      return state;
  }
};
