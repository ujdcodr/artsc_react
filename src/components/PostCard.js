import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const PostCard = ({name,url,description}) => {
	return (
		<Col>
			<Card>
				{name}
				<Image src={url} thumbnail />
                {description}
			</Card>
			<br></br>
		</Col>
	);
};

export default PostCard;

