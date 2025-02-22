import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // App.js에서 가져오기
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // public/index.html의 'root' 요소에 렌더링
);
