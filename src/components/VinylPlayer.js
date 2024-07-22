import React, { useRef, useState } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './VinylPlayer.css';

const VinylPlayer = ({ currentAlbum }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const playSong = (songFileName) => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.src = `${process.env.PUBLIC_URL}/assets/${songFileName}`;
      audioElement.load();
      audioElement.play().then(() => {
        setIsPlaying(true);
        setIsSpinning(true);
      }).catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  const pauseSong = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.pause();
      setIsPlaying(false);
      setIsSpinning(false);
    }
  };

  const continueSong = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play().then(() => {
        setIsPlaying(true);
        setIsSpinning(true);
      }).catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  const generateSongFileName = (albumName, songIndex) => {
    const sanitizedAlbumName = albumName.toLowerCase().replace(/\s+/g, '-');
    return `${sanitizedAlbumName}-song${songIndex + 1}.mp3`;
  };

  const renderSongButtons = () => {
    const songButtons = currentAlbum
      ? currentAlbum.songs.map((song, index) => (
          <ListGroup.Item key={index} className="song-list-item">
            <Button
              variant="primary"
              onClick={() => {
                const filename = generateSongFileName(currentAlbum.albumName, index);
                playSong(filename);
              }}
              disabled={isPlaying}
            >
              {song}
            </Button>
          </ListGroup.Item>
        ))
      : new Array(4).fill(null).map((_, index) => (
          <ListGroup.Item key={index} className="song-list-item">
            <Button variant="secondary" disabled>
              Song {index + 1}
            </Button>
          </ListGroup.Item>
        ));
    return songButtons;
  };

  return (
    <div className="vinyl-player-container d-flex flex-column align-items-center justify-content-center">
      <Card className="text-center vinyl-player-card">
        <Card.Body>
          <Card.Title></Card.Title>
          <div className="vinyl">
            <img
              src={
                currentAlbum
                  ? `${process.env.PUBLIC_URL}/assets/${currentAlbum.albumName.toLowerCase().replace(/\s+/g, '-')}-vinyl.png`
                  : `${process.env.PUBLIC_URL}/assets/placeholder-vinyl.png`
              }
              alt={currentAlbum ? currentAlbum.albumName : 'Placeholder Vinyl'}
              className={`vinyl-image img-fluid rounded-circle ${isSpinning ? 'vinyl-spinning' : ''}`}
            />
          </div>
          {currentAlbum && (
            <>
              <Card.Subtitle className="mb-2 text-muted">{currentAlbum.artist}</Card.Subtitle>
              <Card.Text>Now playing: {currentAlbum.albumName}</Card.Text>
            </>
          )}
          <div className="control-buttons mt-3">
            <Button variant="warning" onClick={pauseSong} disabled={!isPlaying} className="mr-2">
              Pause
            </Button>
            <Button variant="success" onClick={continueSong} disabled={isPlaying} className="ml-2">
              Continue
            </Button>
          </div>
          <ListGroup className="song-list mt-3">{renderSongButtons()}</ListGroup>
          <audio ref={audioRef} controls style={{ display: 'none' }}>
            <source src="" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Card.Body>
      </Card>
    </div>
  );
};

export default VinylPlayer;
