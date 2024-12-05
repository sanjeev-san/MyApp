import {put, takeEvery} from 'redux-saga/effects';
import * as actionType from './actionTypes';

function* getProfilesAPI() {
  console.log('CALLING API');
  try {
    let data = yield fetch(
      'https://my-json-server.typicode.com/sanjeev-san/MyApp/profiles',
    );
    data = yield data.json();
    console.log('api call done');
    console.log(data);
    yield put({type: actionType.SET_ALL_PROFILES, data});
    console.log('reducer action done');
  } catch (e) {
    console.log(e);
  }
}

function* profileSaga() {
  console.log('calling saga');
  yield takeEvery(actionType.GET_PROFILES, getProfilesAPI);
}

export default profileSaga;
