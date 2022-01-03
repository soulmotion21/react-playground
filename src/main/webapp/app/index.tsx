import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import store from "./config/store";
import { loadIcons } from "./config/icon-loader";
import { injectStore } from "app/shared/api/client";

import App from "./App";

injectStore(store);
loadIcons();

const rootEl = document.getElementById("root");

const render = (Component) => {
  ReactDom.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootEl
  );
};

render(App);
