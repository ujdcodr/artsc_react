import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FriendRequests = () => {
	let [friend_requests, setFriendRequests] = useState([]);
    let [friends,setFriends] = useState([]);
    let [username,setUsername] = useState("");

	let navigate = useNavigate();

	useEffect(() => {
		fetch("/social/api/get_network/")
			.then((data) => data.json())
			.then((data) => {
				setFriendRequests(data.friend_requests_received);
                setFriends(data.friends);
                setUsername(data.your_username);
			})
			.catch((err) => alert(err));
	}, []);

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

	const confirm_friend_request = (id) => {
		let formData = new FormData();

		formData.append("id", id);

		fetch("/social/api/confirm_friend_request/", {
			method: "POST",
			body: formData,
			headers: {
				"X-CSRFToken": getCookie("csrftoken"),
			},
		})
			.then((data) => data.json())
			.then((data) => {
                console.log(data);
                if(data.status === "successful") {
					let friend_request_selected = null;
					for(const element of friend_requests) {
						if(element.id === id) {
							friend_request_selected = element;
						}
					}
                    setFriendRequests(friend_requests.filter((friend_request)=>friend_request.id!==id));
					setFriends([...friends,friend_request_selected]);
                }
            });
	};

	return (
		<div>
			<br></br>
			<br></br>
			<br></br>
			<div className="App">
				<div className="container py-5">
					<header className="text-white text-center">
						<h1 className="display-4">Your Network</h1>
						<p className="lead mb-0">
							You can view your unaccepted friend requests and friends
						</p>
					</header>

					<Row md={3}>
						<h3 className="text-white">Friend Requests</h3>
						{friend_requests.map((friend_request) => {
							return (
								<Col key={friend_request.id}>
									<Card
										style={{ cursor: "pointer" }}
									>
										{friend_request.user1.first_name}
										<Image src={friend_request.user1.profile_photo} thumbnail />
										<button
											onClick={() => confirm_friend_request(friend_request.id)}
											type="button"
											className="btn btn-secondary"
										>
											Confirm Frind Request
										</button>
									</Card>
									<br></br>
								</Col>
							);
						})}
					</Row>

                    <Row md={3}>
						<h3 className="text-white">Your Friends</h3>
						{friends.map((friend_request) => {
                            if(friend_request.user2.username === username)
                            {    return (
                                    <Col key={friend_request.id}>
                                        <Card
                                            style={{ cursor: "pointer" }}
                                        >
                                            {friend_request.user1.first_name}
                                            <Image src={friend_request.user1.profile_photo} thumbnail />
                                            <button
                                                  onClick={()=>navigate(`/social/user/${friend_request.user1.username}`)}
                                                type="button"
                                                className="btn btn-secondary"
                                            >
                                               Go to profile
                                            </button>
                                        </Card>
                                        <br></br>
                                    </Col>
                                );}
                            else {
                                return (
                                    <Col key={friend_request.id}>
                                        <Card
                                            style={{ cursor: "pointer" }}
                                        >
                                            {friend_request.user2.first_name} {friend_request.user2.last_name}
                                            <Image src={friend_request.user2.profile_photo} thumbnail />
                                            <button
                                                onClick={()=>navigate(`/social/user/${friend_request.user2.username}`)}
                                                type="button"
                                                className="btn btn-secondary"
                                            >
                                                Go to profile
                                            </button>
                                        </Card>
                                        <br></br>
                                    </Col>
                                );
                            }
						})}
					</Row>
				</div>
			</div>
		</div>
	);
};

export default FriendRequests;
