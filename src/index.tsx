import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from '@/modules';
import App from '@/App';

import GlobalStyle from '@/styles';

const sagaMiddleware = createSagaMiddleware(); // Create Saga middleware with a list of Sagas to run
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))); // Connect the Saga middleware to the Redux store
sagaMiddleware.run(rootSaga); // Start our Saga.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
