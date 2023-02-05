import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { useParams } from "react-router-dom";
import PostCard from "./components/PostCard";

//Images of a particular category

function Artwork() {
	
	let [posts,setPosts] = useState([]);
	let [loading,setLoading] = useState(true);
	let {id} = useParams();

	useEffect(()=>{
		fetch(`/social/api/get_posts_for_category/?category_id=${id}`)
		.then((data)=>data.json())
		.then((data)=>{
			setPosts(data.posts)
			setLoading(false);
		})
		.catch((err)=>console.log(err));
	},[]);

	if(loading) {
		return (
			<Loading/>
		);
	}

	return (
		<div className="App">
			<Container>
				<br></br>
				<Row md={3}>
					{posts.map((post,idx) => (
						<PostCard description={post.description} name={post.username} url={post.image}/>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default Artwork;
