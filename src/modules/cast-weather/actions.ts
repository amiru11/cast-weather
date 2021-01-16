import { createAsyncAction } from 'typesafe-actions';
import type { AxiosError } from 'axios';
import type { ICurrentWeahter, IDetailWeahter } from '@/interfaces/weather';

// Create Action Type
export const GET_WEATHER_BY_CITY = 'castWeather/GET_WEATHER_BY_CITY';
export const GET_WEATHER_BY_CITY_SUCCESS = 'castWeather/GET_WEATHER_BY_CITY_SUCCESS';
export const GET_WEATHER_BY_CITY_ERROR = 'castWeather/GET_WEATHER_BY_CITY_ERROR';
export const GET_WEATHER_DETAIL = 'castWeather/GET_WEATHER_DETAIL';
export const GET_WEATHER_DETAIL_SUCCESS = 'castWeather/GET_WEATHER_DETAIL_SUCCESS';
export const GET_WEATHER_DETAIL_ERROR = 'castWeather/GET_WEATHER_DETAIL_ERROR';

// 로딩 중 액션 페이로드 string
export const getWeatherByCityAsync = createAsyncAction(
  GET_WEATHER_BY_CITY,
  GET_WEATHER_BY_CITY_SUCCESS,
  GET_WEATHER_BY_CITY_ERROR,
)<string, ICurrentWeahter, AxiosError>();

export const getWeatherDetailAsync = createAsyncAction(
  GET_WEATHER_DETAIL,
  GET_WEATHER_DETAIL_SUCCESS,
  GET_WEATHER_DETAIL_ERROR,
)<string, IDetailWeahter, AxiosError>();
