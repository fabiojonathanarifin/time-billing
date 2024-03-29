import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "alpinejs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import * as serviceWorker from "./serviceWorker";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </StrictMode>
// );

// serviceWorker.unregister();
