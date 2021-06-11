import React, { useState } from "react";

function Navbar(props) {
	const [state, setState] = useState("");
	const handleChange = (e) => {
		const value = e.target.value;
		setState(value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		props.fetchData(state);
	};
	return (
		<div className="navbar">
			<h3 style={{ marginTop: "-10px" }}>
				Get weather information about a city, state or country.{" "}
				<span>Include city and state for accurate result.</span>
			</h3>
			<div className="input-div">
				<input
					className="weather-input"
					type="text"
					value={state}
					placeholder="Search......."
					onChange={handleChange}
				/>
				<input
					className="submit"
					type="submit"
					value="Submit"
					onClick={handleSubmit}
				/>
			</div>
		</div>
	);
}

export default Navbar;
