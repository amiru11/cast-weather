import type { ActionType } from 'typesafe-actions';
import type * as actions from '@/modules/cast-weather/actions';
import type { ICurrentWeather, IDetailWeather } from '@/interfaces/weather';

export type TCastWeatherAction = ActionType<typeof actions>;

export type TCastWeatherState = {
  currentWeather: {
    loading: boolean;
    error: Error | null;
    data: ICurrentWeather | null;
  };
  detailWeather: {
    loading: boolean;
    error: Error | null;
    data: IDetailWeather | null;
  };
};
