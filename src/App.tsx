import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

interface AppProps {}

const { SNOWPACK_PUBLIC_WEATHER_KEY, SNOWPACK_PUBLIC_WEATHER_HOST } = import.meta.env;
const host = `${SNOWPACK_PUBLIC_WEATHER_HOST}onecall`;
const appid = SNOWPACK_PUBLIC_WEATHER_KEY;
const fetcher = (url: string) =>
  axios
    .request({
      method: 'GET',
      url,
      params: {
        // q: 'Seoul',
        lat: 37.5683,
        lon: 126.9778,
        appid,
        units: 'metric',
        lang: 'kr',
        exclude: 'alert',
      },
    })
    .then((res) => res.data);

function App({}: AppProps) {
  // const { data, error } = useSWR(host, fetcher);
  // console.log('data', data);
  // Return the App component.
  return <div className="App"></div>;
}

export default App;
