import {put, takeEvery} from 'redux-saga/effects';
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

function* profileSaga() {
  console.log('calling saga');
  yield takeEvery(actionType.GET_PROFILES, getProfilesAPI);
  yield takeEvery(actionType.ADD_PROFILE, addProfileAPI);
}

export default profileSaga;
