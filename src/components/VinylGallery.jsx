import React from 'react';

const VinylGallery = () => {
  return (
    <div className="vinyl-gallery">
      <h1>Vinyl Collection</h1>
      <img src={`${process.env.PUBLIC_URL}/images/metallica-vinyl.png`} alt="Metallica Vinyl" className="gallery-image" />
      <img src={`${process.env.PUBLIC_URL}/images/acdc-vinyl.png`} alt="AC/DC Vinyl" className="gallery-image" />
      <img src={`${process.env.PUBLIC_URL}/images/queen-vinyl.png`} alt="Queen Vinyl" className="gallery-image" />
      <img src={`${process.env.PUBLIC_URL}/images/abbey-road-vinyl.png`} alt="Abbey Road Vinyl" className="gallery-image" />
    </div>
  );
};

export default VinylGallery;
