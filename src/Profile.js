
import "./profile.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";


function Profile() {
	const cards = [
		{
			id: 1,
			name: "#1",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 2,
			name: "#2",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 3,
			name: "#3",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
	];

	return (
		<div>
			<div id="gradient"></div>
			<div id="card">
				<div
					style={{ display: "flex", justifyContent: "center", padding: "4px" }}
				>
					<h2>Name</h2>

					<span class="left bottom">username: 731 366 ***</span>
					<span class="right bottom">email: Czech Republic</span>
					<br></br>
					<img src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" />
				</div>
			</div>

			<br></br>
			<br></br>
			<br></br>
			<div className="App">
				<Container>
					<br></br>
					<Row md={3}>
						{cards.map((card) => (
							<Col key={card.id}>
								<Card>
									{card.name}
									<Image src={card.src} thumbnail />
								</Card>
								<br></br>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Profile;
