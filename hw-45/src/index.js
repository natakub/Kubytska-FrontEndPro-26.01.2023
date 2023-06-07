import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import rootReducer from "./redux/reducers/index";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      apiEndpoint: "https://647e059faf984710854ad100.mockapi.io",
    }),
    logger
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
