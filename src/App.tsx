import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherByCityAsync } from '@/modules/cast-weather';
import type { RootState } from '@/modules';

function App(): JSX.Element {
  const { data, loading, error } = useSelector((state: RootState) => state.castWeather.currentWeather);
  const dispatch = useDispatch();

  const handleClickSubmit = () => {
    dispatch(getWeatherByCityAsync.request('seoul'));
  };
  return (
    <div className="App">
      <button onClick={handleClickSubmit}>Search</button>
    </div>
  );
}

export default App;
