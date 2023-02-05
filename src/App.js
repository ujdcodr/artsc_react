import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Profile from "./Profile";
import Artwork from "./Artwork";

import { Routes, Route } from "react-router-dom";
import CategoryPage from "./views/CategoryPage";
import NewPost from "./views/NewPost";
import User from "./views/User";

function App() {

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/social" element={<CategoryPage />} />
				<Route path="/social/profile" element={<Profile />} />
				<Route path="/social/category/:id" element={<Artwork />} />
				<Route path="/social/new_post/" element={<NewPost/>}/>
				<Route path="/social/user/:username" element={<User/>}/>
			</Routes>
		</>
	);
}

export default App;
