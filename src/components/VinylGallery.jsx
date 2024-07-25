import React from 'react';

const VinylGallery = () => {
  return (
    <div className="vinyl-gallery">
      <h1>Vinyl Collection</h1>
      <img 
        src={`${process.env.PUBLIC_URL}/assets/metallica-vinyl.png`} 
        alt="Metallica Vinyl" 
        className="gallery-image" 
        style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '10px' }} 
      />
      <img 
        src={`${process.env.PUBLIC_URL}/assets/acdc-vinyl.png`} 
        alt="AC/DC Vinyl" 
        className="gallery-image" 
        style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '10px' }} 
      />
      <img 
        src={`${process.env.PUBLIC_URL}/assets/queen-vinyl.png`} 
        alt="Queen Vinyl" 
        className="gallery-image" 
        style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '10px' }} 
      />
      <img 
        src={`${process.env.PUBLIC_URL}/assets/abbey-road-vinyl.png`} 
        alt="Abbey Road Vinyl" 
        className="gallery-image" 
        style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '10px' }} 
      />
    </div>
  );
};

export default VinylGallery;
