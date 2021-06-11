import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Weather from "./Weather";

function FetchWeather() {
	const [name, setName] = useState("");
	const [country, setCountry] = useState("");
	const [temperature, setTemperature] = useState("273");
	const [humidity, setHumidity] = useState("");
	const [pressure, setPressure] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [sunrise, setSunrise] = useState("");
	const [timezone, setTimezone] = useState("");
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async (state) => {
		const key = "6eeae633e41a22ceb1c5cb15312ac885";
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${state},&appid=${key}`;
		try {
			const response = await axios.get(url);
			const result = await response;
			console.log(result);
			setName(result.data.name);
			setCountry(result.data.sys.country);
			setDescription(result.data.weather[0].description);
			setTemperature(result.data.main.temp);
			setImage(result.data.weather[0].icon);
			setHumidity(result.data.main.humidity);
			setPressure(result.data.main.pressure);
			setSunrise(result.data.sys.sunrise);
			setTimezone(result.data.timezone);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<Navbar fetchData={fetchData} />
			<Weather
				name={name}
				country={country}
				temperature={temperature}
				weather_icons={image}
				humidity={humidity}
				pressure={pressure}
				weather_descriptions={description}
				sunrise={sunrise}
				timezone={timezone}
			/>
		</div>
	);
}

export default FetchWeather;
