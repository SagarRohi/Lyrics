import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import playerReducer from './reducer';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from "react-redux";
const store=configureStore({
  reducer:{
    player:playerReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>
);
