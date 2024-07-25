
import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Sidebar = ({ selectAlbum }) => {
  const [albums] = useState([
    {
      id: 1,
      albumName: 'Metallica',
      artist: 'Metallica',
      songs: ['Enter Sandman', 'Sad But True', 'The Unforgiven', 'Wherever I May Roam'],
    },
    {
      id: 2,
      albumName: 'Queen',
      artist: 'Queen',
      songs: ['Bohemian Rhapsody', 'Another One Bites the Dust', 'We Will Rock You', 'Radio Ga Ga'],
    },
    {
      id: 3,
      albumName: 'Abbey Road',
      artist: 'The Beatles',
      songs: ['Come Together', 'Something', 'Octopus\'s Garden', 'Here Comes the Sun'],
    },
    {
      id: 4,
      albumName: 'ACDC',
      artist: 'AC/DC',
      songs: ['Thunderstruck', 'Back in Black', 'Highway to Hell', 'You Shook Me All Night Long'],
    },
  ]);

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>Vinyl Collection</Card.Title>
        <ListGroup variant="flush">
          {albums.map((album) => (
            <ListGroup.Item
              key={album.id}
              action
              className="d-flex align-items-center justify-content-between"
              onClick={() => selectAlbum(album)}
            >
              <div className="vinyl d-flex align-items-center justify-content-center">
                <img src={`/assets/${album.albumName}-vinyl.png`} alt={album.albumName} className="vinyl-image img-fluid rounded-circle" />
              </div>
              <div className="album-info">
                <strong>{album.albumName}</strong><br />
                <em>{album.artist}</em>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Sidebar;
