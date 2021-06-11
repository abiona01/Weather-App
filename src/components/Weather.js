import React from "react";

const Weather = ({
	name,
	country,
	temperature,
	humidity,
	weather_descriptions,
	weather_icons,
	pressure,
}) => {
	const temp = Math.round(temperature - 273);

	return (
		<div className="weather-div">
			<div className="weather-condition">
				<h1 style={{ marginBottom: "1.5rem", paddingTop: "1rem" }}>
					{name} | {country}
				</h1>
				<h3
					style={{
						fontSize: "4rem",
						fontWeight: "bold",
						marginTop: "-1rem",
						marginBottom: "-2rem",
					}}
				>
					{temp}&#176;
				</h3>
				<img
					className="weather-icon"
					src={`http://openweathermap.org/img/wn/${weather_icons}@4x.png`}
					alt=""
				/>
			</div>
			<div className="weather-info">
				<p style={{ fontSize: "1.5rem" }}> {weather_descriptions}</p>

				<p>Humidity: {humidity}</p>
				<p>Pressure: {pressure}</p>
			</div>
			{/* <h3>Local Time: {time}</h3> */}
		</div>
	);
};

export default Weather;
