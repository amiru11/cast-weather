import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import castWeather from '@/modules/cast-weather/reducers';
import { watchCastWeather } from '@/modules/cast-weather';
import common from '@/modules/common/reducers';

const rootReducer = combineReducers({ castWeather, common });

export function* rootSaga() {
  yield all([watchCastWeather()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
