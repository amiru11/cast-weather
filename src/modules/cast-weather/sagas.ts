import {
  getWeatherByCityAsync,
  getWeatherDetailAsync,
  GET_WEATHER_BY_CITY,
  GET_WEATHER_DETAIL,
} from '@/modules/cast-weather/actions';
import { getWeatherByCity, getWeatherDetail } from '@/api/weather';
import { takeLatest } from 'redux-saga/effects';
import createAsyncSaga from '@/lib/createAsyncSaga';
const getWeatherByCitySaga = createAsyncSaga(getWeatherByCityAsync, getWeatherByCity);
const getWeatherDetailSaga = createAsyncSaga(getWeatherDetailAsync, getWeatherDetail);

export function* watchCastWeather() {
  yield takeLatest(GET_WEATHER_BY_CITY, getWeatherByCitySaga);
  yield takeLatest(GET_WEATHER_DETAIL, getWeatherDetailSaga);
}
