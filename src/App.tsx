import React from 'react';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

function App(): JSX.Element {
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
