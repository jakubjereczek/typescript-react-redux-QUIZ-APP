import React from 'react';
import { Provider } from 'react-redux'
import './App.scss';
import Header from './components/Header';
import Page from './components/Page';

import store from './utils/store';

function App() {

  return (
    <Provider store={store}>
      <div id="container">
        <Header />
        <Page />
      </div>
    </Provider>

  );
}

export default App;
