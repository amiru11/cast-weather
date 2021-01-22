import { createReducer } from 'typesafe-actions';
import type { TCastWeatherAction, TCastWeatherState } from '@/modules/cast-weather/types';
import {
  GET_WEATHER_BY_CITY,
  GET_WEATHER_BY_CITY_SUCCESS,
  GET_WEATHER_BY_CITY_ERROR,
  GET_WEATHER_DETAIL,
  GET_WEATHER_DETAIL_SUCCESS,
  GET_WEATHER_DETAIL_ERROR,
} from '@/modules/cast-weather/actions';

const initialState: TCastWeatherState = {
  currentWeather: {
    loading: false,
    error: null,
    data: null,
  },
  detailWeather: {
    loading: false,
    error: null,
    data: null,
  },
};

const reducer = createReducer<TCastWeatherState, TCastWeatherAction>(initialState, {
  [GET_WEATHER_BY_CITY]: (state) => ({
    ...state,
    currentWeather: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_WEATHER_BY_CITY_SUCCESS]: (state, action) => ({
    ...state,
    currentWeather: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_WEATHER_BY_CITY_ERROR]: (state, action) => ({
    ...state,
    currentWeather: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
  [GET_WEATHER_DETAIL]: (state) => ({
    ...state,
    detailWeather: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_WEATHER_DETAIL_SUCCESS]: (state, action) => ({
    ...state,
    detailWeather: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_WEATHER_DETAIL_ERROR]: (state, action) => ({
    ...state,
    detailWeather: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default reducer;
