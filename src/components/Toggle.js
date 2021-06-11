import { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
export default function Toggle() {
	const [dark, setDark] = useState(false);
	const darkmode = () => {
		setDark(!dark);
	};
	useEffect(() => {
		document.body.classList.toggle("darkmode", dark);
	}, [dark]);
	return (
		<div className="App">
			<DarkModeToggle onChange={darkmode} checked={dark} size={60} />
		</div>
	);
}
