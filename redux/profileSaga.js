import {put, take, takeEvery, delay} from 'redux-saga/effects';
import * as actionType from './actionTypes';

function* getProfilesAPI() {
  yield put({type: actionType.SET_SCREEN_LOADING, data: 'screen1'});
  yield put({type: actionType.SET_LOADING, data: true});
  yield delay(1000);
  yield put({type: actionType.SET_STATUS_MESSAGE, data: 'calling API'});
  yield delay(1000);

  try {
    let data = yield fetch(
      'https://6751e985d1983b9597b4cbfb.mockapi.io/api/profiles',
    );
    data = yield data.json();
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'setting state'});
    yield delay(1000);
    yield put({type: actionType.SET_ALL_PROFILES, data});
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'success'});
  } catch (e) {
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'failure'});
  }
}
function* addProfileAPI(action) {
  yield put({type: actionType.SET_SCREEN_LOADING, data: 'screen2'});
  yield put({type: actionType.SET_LOADING, data: true});
  yield delay(1000);
  yield put({type: actionType.SET_STATUS_MESSAGE, data: 'calling API'});
  yield delay(1000);
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
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'setting state'});
    yield delay(1000);
    yield put({type: actionType.ADD_PROFILE_TO_STORE, data});
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'success'});
  } catch (e) {
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'failure'});
  }
}
function* editProfileAPI(action) {
  yield put({type: actionType.SET_SCREEN_LOADING, data: 'screen2'});
  yield put({type: actionType.SET_LOADING, data: true});
  yield delay(1000);
  yield put({type: actionType.SET_STATUS_MESSAGE, data: 'calling API'});
  yield delay(1000);
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
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'setting state'});
    yield delay(1000);
    yield put({type: actionType.EDIT_PROFILE_IN_STORE, data});
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'success'});
  } catch (e) {
    yield put({type: actionType.SET_STATUS_MESSAGE, data: 'failure'});
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
