import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Forecast() {
	const [data, setData] = useState([]);
	const [city, setCity] = useState("");
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async (state) => {
		const key = "6eeae633e41a22ceb1c5cb15312ac885";
		const url = `https://api.openweathermap.org/data/2.5/forecast?q=${state}&cnt=4&appid=${key}`;
		try {
			const response = await axios.get(url);
			const result = await response;
			console.log(result);
			setData(result.data.list);
			setCity(result.data.city);
		} catch (error) {
			console.log(error);
		}
	};
	const Cast = ({ cast: { main, dt, weather } }) => {
		const temperature = Math.round(main.temp - 273);
		const icon = weather[0].icon;
		const description = weather[0].description;
		const time = new Date(dt * 1000);
		const hours = time.getHours();
		const minutes = "0" + time.getMinutes();
		const formattedTime = hours + ":" + minutes.substr(-2);
		return (
			<div className="forecast-div" style={{ height: "500px" }}>
				<div className="temp-icon">
					<h3>{formattedTime}</h3>
					<img
						className="weather-icon"
						src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
						alt=""
					/>
					<h1>{temperature}&#176;</h1>
					<h3>{description}</h3>
				</div>
			</div>
		);
	};
	const City = ({ city: { name, country } }) => {
		// const name = result?.data.city.name;
		// const country = result?.data.city.country;
		return (
			<div>
				<h2>
					{name} | {country}
				</h2>
			</div>
		);
	};
	return (
		<div>
			<Navbar fetchData={fetchData} />
			<City city={city} />
			<div className="forecast-wrapper">
				{data.map((cast, i) => {
					return <Cast key={i} cast={cast} />;
				})}
			</div>
		</div>
	);
}

export default Forecast;
