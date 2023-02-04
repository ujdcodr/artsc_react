import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function MainPage(props) {
    const cards = [
        { id: 1, user:'u1', src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
        { id: 2, user:'u2', src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
        { id: 3, user:'u3', src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
        { id: 4, user:'u4', src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
        { id: 5, user:'u5', src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
        { id: 6, user:'u6', src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
        { id: 7, user:'u7', src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
        { id: 8, user:'u8', src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
      ];

    return (
        <div className="Main">
        <Container>
      <Row md={3}> 
        {cards.map((card) => (
          <Col key={card.id}  >
              <Card>
                {card.user}
                <Image src={card.src} thumbnail />
              </Card>
            
          </Col>
        ))}
      </Row>
      
    </Container>
      </div>
    );
}

