import type { AxiosResponse } from 'axios';
import { requestAxios } from '@/lib/request';
import type { ICurrentWeather, IDetailWeather } from '@/interfaces/weather';

const {
  SNOWPACK_PUBLIC_WEATHER_KEY,
  SNOWPACK_PUBLIC_WEATHER_HOST,
} = import.meta.env;
const host = SNOWPACK_PUBLIC_WEATHER_HOST;
const appid = SNOWPACK_PUBLIC_WEATHER_KEY;

export const getWeatherByCity = async ({
  cityName = 'seoul',
  units = 'metric',
}: {
  cityName: string;
  units: string;
}): Promise<ICurrentWeather> => {
  const result: AxiosResponse = await requestAxios({
    url: `${host}weather`,
    params: {
      appid,
      q: cityName,
      units,
    },
  });
  return result.data;
};

export const getWeatherDetail = async ({
  lat,
  lon,
  units = 'metric',
}: {
  lat: number;
  lon: number;
  units: string;
}): Promise<IDetailWeather> => {
  const result: AxiosResponse = await requestAxios({
    url: `${host}onecall`,
    params: {
      appid,
      lat,
      lon,
      units,
      exclude: 'alert,minutely,hourly',
    },
  });
  return result.data;
};
