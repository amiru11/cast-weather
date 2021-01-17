import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';

const Main = styled.main`
  height: calc(100vh - (48px + 2rem));
`;

function App(): JSX.Element {
  // const { data, loading, error } = useSelector((state: RootState) => state.castWeather.currentWeather);
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
