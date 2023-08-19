import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './Components/Button';
import PuzzleGallery from './Components/ImageGallery';
import ImageGallery from './Components/ImageGallery';
import ImageData from './Components/ImageData';

function App() {
  const metadataArray = [];

  for (let i = 0; i < 20; i++) {
    const metadata = {
      dna: `dna-${i}`,
      name: `Untitled Project #${i}`,
      description: null,
      image: `ipfs://QmbsbAKnWHoBRQ45JE3MqThpqvcBAqqY7oQA2dxLmL3cBh/${i}.png`,
      date: 1690703170340 + i, // Adjust date if needed
      attributes: [
        {
          trait_type: "Background",
          value: "images"
        },
        {
          trait_type: "Caps",
          value: `images-removebg-preview-${i}`
        },
        {
          trait_type: "Characters",
          value: `images-removebg-preview (${i})`
        }
      ],
      compiler: "mintables.club"
    };
    metadataArray.push(metadata);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/puzzle-gallery" element={<ImageGallery galleryImages={metadataArray} />} />
      </Routes>
    </Router>
    // <>
    //   {/* <h1>IPFS Image Display</h1>
    //   {metadataArray.map((metadata, index) => (
    //     <ImageData key={index} metadata={metadata} />
    //   ))}
    //   <ImageGallery /> */}
    //   <div className="App">
    //     <ImageGallery galleryImages={metadataArray} /> {/* Pass the correct prop name */}
    //   </div>
    // </>
  );
}

export default App;
