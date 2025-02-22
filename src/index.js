import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App"; // App.js에서 가져오기
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);