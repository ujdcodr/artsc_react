import { useState, useEffect } from "react";
import { Col, Container, Card, Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

import ProfileCard from "../components/ProfileCard";
import Loading from "../components/Loading";
import PostCard from "../components/PostCard";

import { useParams } from "react-router-dom";

const User = () => {
	const FRIEND_STATS = {
		SENT: "SENT",
		FRIEND: "FRIEND",
		NOT_A_FRIEND: "NOT A FRIEND",
	};

	let [user, setUser] = useState();
	let [posts, setPosts] = useState([]);
	let [friendStatus, setFriendStatus] = useState(" ");
	let [loading, setLoading] = useState(true);
	let [sentFriendRequest, setFriendRequest] = useState(false);

	let { username } = useParams();

	useEffect(() => {
		fetch(`/user/api/get_user_data/?username=${username}`)
			.then((data) => data.json())
			.then((data) => {
				setUser(data.user);
				setPosts(data.posts);
				setFriendStatus(data.friend);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <Loading />;
	}

	const getCookie = (name) => {
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	};

	const send_friend_request = () => {
		setFriendRequest(true);
		let formData = new FormData();
		formData.append("username", username);

		fetch("/social/api/send_friend_request/", {
			method: "POST",
			body: formData,
			headers: {
				"X-CSRFToken": getCookie("csrftoken"),
			},
		})
			.then((data) => data.json())
			.then((data) => {
				if (data.status === "successful") {
					setFriendStatus(FRIEND_STATS.SENT);
				} else {
					alert(data.error);
				}
			});
	};

	const render_friend_button = () => {
		if (friendStatus === FRIEND_STATS.FRIEND) {
			return <></>;
		} else if (friendStatus === FRIEND_STATS.NOT_A_FRIEND) {
			return (
				<button
					onClick={() => send_friend_request()}
					type="button"
					className="btn btn-secondary"
				>
					Send Frind Request
				</button>
			);
		} else if (friendStatus === FRIEND_STATS.SENT) {
			return (
				<button disabled type="button" className="btn btn-secondary">
					Friend Request Sent
				</button>
			);
		} else {
			return <></>;
		}
	};

	return (
		<div>
			<div id="gradient"></div>
			<ProfileCard
				email={user.email}
				first_name={user.first_name}
				last_name={user.last_name}
				username={user.username}
				profile_photo={"/media/default.jpeg"}
			/>

			<br></br>
			<br></br>
			<br></br>
			<div className="App">
				<Container>
					<br></br>
					<Row>
						<Col>
							<div style={{ justifyContent: "center", textAlign: "center" }}>
								{render_friend_button()}
							</div>
						</Col>
					</Row>
					<Row md={3}>
						{posts.map((post, idx) => (
							<div style={{ cursor: "pointer" }}>
								<PostCard
									description={post.description}
									name={post.username}
									url={post.image}
								/>
							</div>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default User;
