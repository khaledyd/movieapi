import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/* -------------------------------- API KEY ------------------------------- */
let APIKEY = "17b1267d22c03010b3c8a1656532005e";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// let APIUrl = `https://api.themoviedb.org/3/movie/550?api_key=17b1267d22c03010b3c8a1656532005e
// `;

// fetch(APIUrl)
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		// showWeather(data);
// 	});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
