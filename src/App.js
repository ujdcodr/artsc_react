import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Profile from "./Profile";
import Artwork from "./Artwork";

import { Routes, Route } from "react-router-dom";
import CategoryPage from "./views/CategoryPage";

function App() {

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/social" element={<CategoryPage />} />
				<Route path="/social/profile" element={<Profile />} />
				<Route path="/social/category/:id" element={<Artwork />} />
			</Routes>
		</>
	);
}

export default App;
