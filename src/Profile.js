import "./profile.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

import ProfileCard from "./components/ProfileCard";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import PostCard from "./components/PostCard";

function Profile() {
	let [user, setUser] = useState();
	let [posts, setPosts] = useState([]);

	let [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/user/api/get_logged_in_user")
			.then((data) => data.json())
			.then((data) => {
				setUser(data.user);
				setPosts(data.posts);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<div>
			<div id="gradient"></div>
			<ProfileCard
				email={user.email}
				first_name={user.first_name}
				last_name={user.last_name}
				username={user.username}
				profile_photo={user.profile_photo}
			/>

			<br></br>
			<br></br>
			<br></br>
			<div className="App">
				<Container>
					<br></br>
					<Row md={3}>
						{posts.map((post) => {
							return (
								<PostCard
									key={post.id}
									description={post.description}
									name={post.category.display_name}
									url={post.image}
								/>
							);
						})}
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Profile;
