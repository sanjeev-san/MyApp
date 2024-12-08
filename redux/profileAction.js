import * as actionType from './actionTypes';

export const addProfile = data => {
  //can write any other business logic to change "data"
  return {
    type: actionType.ADD_PROFILE,
    data: data,
  };
};
export const addProfileToStore = data => {
  //can write any other business logic to change "data"
  return {
    type: actionType.ADD_PROFILE_TO_STORE,
    data: data,
  };
};
export const editProfile = data => {
  //can write any other business logic to change "data"
  return {
    type: actionType.EDIT_PROFILE,
    data: data,
  };
};
export const editProfileToStore = data => {
  //can write any other business logic to change "data"
  return {
    type: actionType.EDIT_PROFILE_IN_STORE,
    data: data,
  };
};
export const deleteProfileFromStore = data => {
  //can write any other business logic to change "data"
  return {
    type: actionType.DELETE_PROFILE_FROM_STORE,
    data: data,
  };
};
export const deleteProfile = data => {
  //can write any other business logic to change "data"
  return {
    type: actionType.DELETE_PROFILE,
    data: data,
  };
};

export const getProfiles = () => {
  //can write any other business logic to change "data"
  return {
    type: actionType.GET_PROFILES,
  };
};

export const setProfileData = data => {
  // console.log(data);
  return {
    type: actionType.SET_ALL_PROFILES,
    data,
  };
};
export const setLoading = data => {
  // console.log(data);
  return {
    type: actionType.SET_LOADING,
    data,
  };
};
export const setScreenLoading = data => {
  // console.log(data);
  return {
    type: actionType.SET_LOADING,
    data,
  };
};
export const setStatusMessage = data => {
  // console.log(data);
  return {
    type: actionType.SET_STATUS_MESSAGE,
    data,
  };
};
