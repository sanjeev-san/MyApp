import {put, take, takeEvery, delay} from 'redux-saga/effects';
import * as actionType from './actionTypes';

function* getProfilesAPI() {
  yield put({type: actionType.SET_LOADING, data: true}); // Show loader
  yield delay(1000); // Simulate delay for user feedback

  yield put({type: actionType.SET_STATUS_MESSAGE, data: 'calling API'});
  yield delay(1000); // Simulate delay for user feedback

  try {
    let data = yield fetch(
      'https://6751e985d1983b9597b4cbfb.mockapi.io/api/profiles',
    );
    data = yield data.json();
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'setting state'});
    yield delay(1000); // Simulate delay for user feedback
    yield put({type: actionType.SET_ALL_PROFILES, data});
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'success'});
  } catch (e) {
    // console.log(e);
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'failure'});
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
  // console.log(JSON.stringify(action.data));
  try {
    let data = yield fetch(
      `https://6751e985d1983b9597b4cbfb.mockapi.io/api/profiles/${action.data.id}`,
      requestOptions,
    );
    data = yield data.json();
    // console.log(data);
    yield put({type: actionType.EDIT_PROFILE_IN_STORE, data});
  } catch (e) {
    console.log(e);
  }
}

function* deleteProfileAPI(action) {
  // console.log('api called');
  let id = action.data;
  // console.log(id);
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
    // console.log('api done', data);
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
