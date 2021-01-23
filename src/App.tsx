import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import { getWeatherResultAsync } from '@/modules/cast-weather';

const { useEffect } = React;

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherResultAsync.request({}));
  }, []);
  // const { data, loading, error } = useSelector((state: RootState) => state.castWeather.currentWeather);
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
