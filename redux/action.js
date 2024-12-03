import * as actionType from './actionTypes';

export function addProfile(data) {
  return {
    type: actionType.ADD_PROFILE,
    data: data,
  };
}
