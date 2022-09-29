import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/App';
import store from './store';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// {
//   "id": 1,
//   "name": "Первый герой",
//   "description": "Первый герой в рейтинге!",
//   "element": "fire"
// },
// {
//   "id": 2,
//   "name": "Неизвестный герой",
//   "description": "Скрывающийся в тени",
//   "element": "wind"
// },
// {
//   "id": 5,
//   "name": "sergo",
//   "description": "dood",
//   "element": "earth"
// }