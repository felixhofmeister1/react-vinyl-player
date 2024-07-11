// src/App.js

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VinylPlayer from './components/VinylPlayer';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [currentAlbum, setCurrentAlbum] = useState(null);

  const selectAlbum = (album) => {
    setCurrentAlbum(album);
  };

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={3} className="sidebar-col">
            <Sidebar selectAlbum={selectAlbum} />
          </Col>
          <Col md={9} className="main-col">
            <VinylPlayer currentAlbum={currentAlbum} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
