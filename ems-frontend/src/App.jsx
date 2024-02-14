import "./App.css";
import UpsertEmployee from "./components/UpsertEmployee";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<ListEmployee />}></Route>
					<Route path="/employees" element={<ListEmployee />}></Route>
					<Route path="/add-employee" element={<UpsertEmployee />}></Route>
					<Route path="/edit-employee/:id" element={<UpsertEmployee />}></Route>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
