import type { ActionType } from 'typesafe-actions';
import type * as actions from '@/modules/cast-weather/actions';
import type { ICurrentWeahter, IDetailWeahter } from '@/interfaces/weather';

export type TCastWeatherAction = ActionType<typeof actions>;

export type TCastWeatherState = {
  currentWeather: {
    loading: boolean;
    error: Error | null;
    data: ICurrentWeahter | null;
  };
  detailWeather: {
    loading: boolean;
    error: Error | null;
    data: IDetailWeahter | null;
  };
};
