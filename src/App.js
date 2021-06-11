import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FetchWeather from "./components/FetchWeather";
import Forecast from "./components/Forecast";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/">
						<FetchWeather />
					</Route>
					<Route path="/forecast">
						<Forecast />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
