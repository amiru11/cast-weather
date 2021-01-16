import {
  getWeatherByCityAsync,
  getWeatherDetailAsync,
  GET_WEATHER_BY_CITY,
  GET_WEATHER_BY_CITY_SUCCESS,
  GET_WEATHER_BY_CITY_ERROR,
  GET_WEATHER_DETAIL,
} from '@/modules/cast-weather/actions';
import { getWeatherByCity, getWeatherDetail } from '@/api/weather';
import { call, put, takeLatest } from 'redux-saga/effects';
import createAsyncSaga from '@/lib/createAsyncSaga';

// function* getWeatherByCitySaga({ payload: cityName }) {
//   try {
//     const currentWeather = yield call(getWeatherByCity, cityName); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
//     console.log('currentWeather', currentWeather);
//     yield put({
//       type: GET_WEATHER_BY_CITY_SUCCESS,
//       payload: currentWeather,
//     }); // 성공 액션 디스패치
//   } catch (e) {
//     yield put({
//       type: GET_WEATHER_BY_CITY_ERROR,
//       error: true,
//       payload: e,
//     }); // 실패 액션 디스패치
//   }
// }
const getWeatherByCitySaga = createAsyncSaga(getWeatherByCityAsync, getWeatherByCity);

export function* watchCastWeather() {
  yield takeLatest(GET_WEATHER_BY_CITY, getWeatherByCitySaga);
}
