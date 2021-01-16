import type { AxiosResponse } from 'axios';
import { requestAxios } from '@/lib/request';

const { SNOWPACK_PUBLIC_WEATHER_KEY, SNOWPACK_PUBLIC_WEATHER_HOST } = import.meta.env;
const host = SNOWPACK_PUBLIC_WEATHER_HOST;
const appid = SNOWPACK_PUBLIC_WEATHER_KEY;

export const getWeatherByCity = async (cityName: string): Promise<any> => {
  const result: AxiosResponse = await requestAxios({
    url: `${host}weather`,
    params: {
      appid,
      q: cityName,
      units: 'metric',
    },
  });
  return result.data;
};

export const getWeatherDetail = ({ lat, lon }: { lat: number; lon: number }): Promise<AxiosResponse> => {
  return requestAxios({
    url: `${host}onecall`,
    params: {
      appid,
      lat,
      lon,
      units: 'metric',
      exclude: 'alert,minutely,hourly',
    },
  });
};
