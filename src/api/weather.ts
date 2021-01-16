import type { AxiosResponse } from 'axios';
import { requestAxios } from '@/lib/request';

const { SNOWPACK_PUBLIC_WEATHER_KEY, SNOWPACK_PUBLIC_WEATHER_HOST } = import.meta.env;
const host = SNOWPACK_PUBLIC_WEATHER_HOST;
const appid = SNOWPACK_PUBLIC_WEATHER_KEY;

export const getWeatherByCity = (cityName: string): Promise<AxiosResponse> => {
  return requestAxios({
    url: `${host}weather`,
    params: {
      appid,
      q: cityName,
      units: 'metric',
    },
  });
};

export const getWeatherOneCall = ({ lat, lon }: { lat: number; lon: number }): Promise<AxiosResponse> => {
  return requestAxios({
    url: `${host}onecall`,
    params: {
      appid,
      lat,
      lon,
      units: 'metric',
    },
  });
};
