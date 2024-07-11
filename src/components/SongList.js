// src/components/SongList.js

import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SongList = ({ songs }) => {
  return (
    <ListGroup className="mt-3">
      {songs.map((song, index) => (
        <ListGroup.Item key={index}>{song}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SongList;
