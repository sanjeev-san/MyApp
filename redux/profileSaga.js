import {put, take, takeEvery} from 'redux-saga/effects';
import * as actionType from './actionTypes';

function* getProfilesAPI() {
  try {
    let data = yield fetch(
      'https://6751e985d1983b9597b4cbfb.mockapi.io/api/profiles',
    );
    data = yield data.json();
    yield put({type: actionType.SET_ALL_PROFILES, data});
  } catch (e) {
    console.log(e);
  }
}
function* addProfileAPI(action) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.data),
  };
  try {
    let data = yield fetch(
      'https://6751e985d1983b9597b4cbfb.mockapi.io/api/profiles',
      requestOptions,
    );
    data = yield data.json();
    yield put({type: actionType.ADD_PROFILE_TO_STORE, data});
  } catch (e) {
    console.log(e);
  }
}
function* editProfileAPI(action) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.data),
  };
  console.log(JSON.stringify(action.data));
  try {
    let data = yield fetch(
      `https://6751e985d1983b9597b4cbfb.mockapi.io/api/profiles/${action.data.id}`,
      requestOptions,
    );
    data = yield data.json();
    console.log(data);
    yield put({type: actionType.EDIT_PROFILE_IN_STORE, data});
  } catch (e) {
    console.log(e);
  }
}

function* deleteProfileAPI(action) {
  console.log('api called');
  let id = action.data;
  console.log(id);
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    let data = yield fetch(
      `https://6751e985d1983b9597b4cbfb.mockapi.io/api/profiles/${id}`,
      requestOptions,
    );
    data = yield data.json();
    console.log('api done', data);
    yield put({type: actionType.DELETE_PROFILE_FROM_STORE, data});
  } catch (e) {
    console.log(e);
  }
}

function* profileSaga() {
  console.log('calling saga');
  yield takeEvery(actionType.GET_PROFILES, getProfilesAPI);
  yield takeEvery(actionType.ADD_PROFILE, addProfileAPI);
  yield takeEvery(actionType.DELETE_PROFILE, deleteProfileAPI);
  yield takeEvery(actionType.EDIT_PROFILE, editProfileAPI);
}

export default profileSaga;
