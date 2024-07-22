import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import './DropdownAlbum.css';

const DropdownAlbums = ({ selectAlbum }) => {
  const albums = [
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
  ];

  return (
    <Dropdown className="my-4">
      <Dropdown.Toggle variant="primary" id="dropdown-albums">
        Select Album
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {albums.map((album) => (
          <Dropdown.Item key={album.id} onClick={() => selectAlbum(album)}>
            <img src={`/assets/${album.albumName}-vinyl.png`} alt={album.albumName} className="album-icon" /> {album.albumName}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownAlbums;
