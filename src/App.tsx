// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import Router from './utils/router';
import 'normalize.css';
import './main.scss';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
