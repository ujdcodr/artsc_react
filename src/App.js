import './App.css';
import  { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import MainPage from './views/MainPage';

import { BrowserRouter as Router,Routes, Route, Link, Navigate } from "react-router-dom";


function App() {

  const images = ["https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
  "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
  "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
  "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
  "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
  "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
  "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"];

  const cards = [
    { id: 1, name:"sketch",src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
    { id: 2, name:"portrait",src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
    { id: 3, name:"painting",src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
    { id: 4, name:"graffiti",src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
    { id: 5, name:"tatoo",src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
    { id: 6, name:"abstract",src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
    { id: 7, name:"crayon",src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
    { id: 8, name:"sketch2",src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" },
  ];

  const [showMainPage, setShowMainPage] = useState(false);

  const handleClick = () => {
    setShowMainPage(true);
  };

  return (
    /*
    <div className="App">
      
       <Container>
      <Row className='mt-5' md={3}>
        <Card onClick={onclick}>
          Sketch
        <Col><Image
        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded
      /></Col>
      
      </Card>
      <Card>
        Portrait
        <Col><Image
        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded
      /></Col></Card>
       <Card>
        Anime
        <Col><Image
        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded
      /></Col></Card>
      </Row>
      <Row className='mt-5' md={3}>
        <Card>
          Painting
        <Col><Image
        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded
      /></Col></Card>
      <Card>
        <Col><Image
        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded
      /></Col></Card>
      <Card>
        <Col><Image
        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded
      /></Col></Card>

      </Row>
      <Row className='mt-5' md={3}>
        <Card>
        <Col><Image
        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded
      /></Col></Card>
      <Card>
        <Col><Image
        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded
      /></Col></Card>
      <Card>
        <Col><Image
        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded
      /></Col></Card>
      </Row>

    </Container>
    
    </div>
    */
    <div className="App">
        <Container>
      <Row md={3}> 
        {cards.map((card) => (
          <Col key={card.id}  >
            <Link to="/MainPage">
              <Card>
                {card.name}
                <Image src={card.src} thumbnail />
              </Card>
              </Link>
            
          </Col>
        ))}
      </Row>
      {showMainPage && <MainPage />}
    </Container>

      </div>

  );
}

export default App;
