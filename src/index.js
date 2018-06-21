import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import './index.css';
import App from './components/App';
import { Banner } from './components/Banner'
import kwitterAppReducer from "./reducer.js";
import registerServiceWorker from './registerServiceWorker';


const store = createStore(kwitterAppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
    <Banner />
  </Provider>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
registerServiceWorker();
