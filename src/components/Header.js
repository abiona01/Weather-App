import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

function Header() {
	return (
		<header style={headerStyle}>
			<div>
				<Link style={linkStyle} to="/">
					Current Weather
				</Link>{" "}
				|{" "}
				<Link style={linkStyle} to="/forecast">
					Forecast
				</Link>
			</div>
			<Toggle />
		</header>
	);
}
const headerStyle = {
	display: "flex",
	backgroundColor: "#f7e7e1",
	textAlign: "center",
	height: "3rem",
	padding: "10px",
	flexWrap: "wrap",
	justifyContent: "space-around",
};

const linkStyle = {
	color: "#000",
	textDecoration: "none",
};
export default Header;
