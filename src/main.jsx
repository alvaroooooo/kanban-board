import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

import './style/index.css'
import './style/icons.css'
import './style/aside.css'
import './style/board.css'
import './style/column.css'
import './style/form.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
