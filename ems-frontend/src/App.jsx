import "./App.css";
import AddEmployee from "./components/AddEmployee";
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
					<Route path="/add-employee" element={<AddEmployee />}></Route>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
