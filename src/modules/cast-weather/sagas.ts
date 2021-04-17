import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getWeatherByCityAsync,
  getWeatherDetailAsync,
  GET_WEATHER_BY_CITY,
  GET_WEATHER_DETAIL,
} from '@/modules/cast-weather/actions';
import { getWeatherByCity, getWeatherDetail } from '@/api/weather';
import createAsyncSaga from '@/lib/createAsyncSaga';
import { ICurrentWeather, IDetailWeather } from '@/interfaces/weather';

interface IResultActionPayload {
  type?: string;
  payload?: {
    cityName: string;
    units: string;
  };
}

const getWeatherByCitySaga = createAsyncSaga(getWeatherByCityAsync, getWeatherByCity);
const getWeatherDetailSaga = createAsyncSaga(getWeatherDetailAsync, getWeatherDetail);

function* getWeatherResultSaga({ payload }: IResultActionPayload) {
  try {
    const { cityName, units } = payload;
    const current: ICurrentWeather = yield call(getWeatherByCity, {
      cityName,
      units,
    });
    yield put(getWeatherByCityAsync.success(current));
    console.log('current', current);
    const { coord } = current;
    const week: IDetailWeather = yield call(getWeatherDetail, {
      ...coord,
      units,
    });
    console.log('week', week);
    yield put(
      getWeatherDetailAsync.success({
        ...week,
        daily: (([x, ...daily]) => daily)([...week.daily]),
      }),
    );
  } catch (err) {
    yield put(getWeatherByCityAsync.failure(err));
    yield put(getWeatherDetailAsync.failure(err));
  }
}

export function* watchCastWeather() {
  yield takeLatest(GET_WEATHER_BY_CITY, getWeatherByCitySaga);
  // yield takeLatest(GET_WEATHER_DETAIL, getWeatherDetailSaga);
  yield takeLatest(GET_WEATHER_DETAIL, getWeatherResultSaga);
}
