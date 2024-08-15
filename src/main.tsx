import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Router from './utils/router';
import 'normalize.css';
import './main.scss';

import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
