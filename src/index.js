import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Reducer from './context/Reducer';
import { initialState } from './context/initialState';
import StateContext from './context/StateProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContext initialState={initialState} reducer={Reducer}>
        <App />
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>
);
