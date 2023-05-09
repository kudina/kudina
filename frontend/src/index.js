import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts/Hellix/Hellix-Bold.ttf";
import "./fonts/Hellix/Hellix-SemiBold.ttf";
import "./fonts/Hellix/Hellix-Regular.ttf";

import { Provider } from "react-redux";
import store from "./app/store";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
