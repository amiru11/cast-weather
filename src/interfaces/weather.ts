interface ICoordProp {
  lon: number;
  lat: number;
}

interface IWeatherProp {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface IMainProp {
  temp: number;
  feels_like?: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
interface IWindProp {
  speed: number;
  deg: number;
}
interface ICloudsProp {
  all: number;
}
interface ISysProp {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface ITempProp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
interface IFeelsLikeProp {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

interface IDetailWeatherItem {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number | ITempProp;
  feels_like: number | IFeelsLikeProp;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: IWeatherProp;
  pop?: number;
}

export interface ICurrentWeather {
  coord: ICoordProp;
  weather: IWeatherProp;
  base: string;
  main: IMainProp;
  visibility: number;
  wind: IWindProp;
  clouds: ICloudsProp;
  dt: number;
  sys: ISysProp;
  timezone?: number;
  id: number;
  name: string;
  cod: number;
}
export interface IDetailWeather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: IDetailWeatherItem;
  daily: IDetailWeatherItem[];
}
