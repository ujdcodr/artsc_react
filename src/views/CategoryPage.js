import MainPage from "./MainPage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
	let [categories, setCategories] = useState([]);
	let [loading, setLoading] = useState(true);

	let navigate = useNavigate();

	

	useEffect(() => {
		fetch("/social/api/get_categories/")
			.then((data) => data.json())
			.then((data) => {
				setCategories(data.categories);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	const cards = [
		{
			id: 1,
			name: "Portrait",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 2,
			name: "Landscape",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 3,
			name: "Genre Painting",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 4,
			name: "Abstract",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 5,
			name: "Religious Painting",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 6,
			name: "City-scape",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 7,
			name: "Sketch and Study",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 8,
			name: "Illustration",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 9,
			name: "Still Life",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 10,
			name: "Symbolic Painting",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 11,
			name: "Figurative",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 12,
			name: "Design",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 13,
			name: "Mythological Painting",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
		{
			id: 14,
			name: "Marina",
			src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
		},
	];

	if (loading) {
		return (
			<Container>
				<br></br>
				<Row md={3}>
					<Loading />
				</Row>
			</Container>
		);
	}

	return (
		<div className="App">
			<Container>
				<br></br>
				<Row md={3}>
					{categories.map((category) => (
						<Col key={category.id}>
							<Card style={{cursor:"pointer"}} onClick={()=>navigate(`/social/category/${category.id}`)}>
								{category.display_name}
								<Image src={"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"} thumbnail />
							</Card>
							<br></br>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default CategoryPage;
