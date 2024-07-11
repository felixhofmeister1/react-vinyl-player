// src/components/VinylPlayer.js

import React from 'react';
import { Card } from 'react-bootstrap';
import SongList from './SongList';

const VinylPlayer = ({ currentAlbum }) => {
  return (
    <div className="vinyl-player">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Vinyl Player</Card.Title>
          {currentAlbum ? (
            <>
              <div className="vinyl">
                <img src={`/assets/${currentAlbum.albumName}-vinyl.png`} alt={currentAlbum.albumName} className="vinyl-image" />
              </div>
              <Card.Subtitle className="mb-2 text-muted">{currentAlbum.artist}</Card.Subtitle>
              <Card.Text>
                Now playing: {currentAlbum.albumName}
              </Card.Text>
              <SongList songs={currentAlbum.songs} />
            </>
          ) : (
            <Card.Text>Select an album to play.</Card.Text>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default VinylPlayer;
