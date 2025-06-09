// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Router from "./router/index";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
