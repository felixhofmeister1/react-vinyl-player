import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const SongList = ({ songs, albumName }) => {
  const playSong = (song) => {
    const audio = new Audio(`/assets/${albumName}-${song}.mp3`);
    audio.play();
  };

  return (
    <ListGroup>
      {songs.map((song, index) => (
        <ListGroup.Item key={index}>
          <Button variant="link" onClick={() => playSong(song)}>
            {song}
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SongList;
