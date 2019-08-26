import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer.js';
import { BrowserRouter } from 'react-router-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

console.log(store.getState(), 'store');
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
