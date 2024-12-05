import * as actionType from './actionTypes';

export const addProfile = data => {
  //can write any other business logic to change "data"
  return {
    type: actionType.ADD_PROFILE,
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
  console.log(data);
  return {
    type: actionType.SET_ALL_PROFILES,
    data,
  };
};
