import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const artworks = [
    // Array of your artwork objects
    {
        title: "#001",
        imageUrl: "/neverStops.jpg",
        description: "Paper cut with X-acto knife"
    },
    {
        title: "X01",
        imageUrl: "/newsPrint.jpg",
        description: "Handcarved stamp on newsprint paper with black ink"
    },
    {
        title: "A Girl is a Gun",
        imageUrl: "/girlGun.jpg",
        description: "Acrylic on canvas"
    },
    {
        title: "Sade - Kiss 4 L",
        imageUrl: "/kiss4.jpg",
        description: "Acrylic on canvas"
    },
    {
        title: "CrossFire",
        imageUrl: "/cross.png",
        description: "Acrylic on canvas"
    },
];

const Gallery = () => {
    
    //Pressing on Image
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedIdx, setSelectedIdx] = useState(-1);

    const openModal = (img, index) => {
        setSelectedImg(img);
        setSelectedIdx(index);
        document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
    };

    const closeModal = () => {
        setSelectedImg(null);
        setSelectedIdx(-1);
        document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    };

    const goToPrevious = () => {
        if (selectedIdx > 0) {
            setSelectedIdx(selectedIdx - 1);
            setSelectedImg(artworks[selectedIdx - 1].imageUrl);
        }
    };

    const goToNext = () => {
        if (selectedIdx < artworks.length - 1) {
            setSelectedIdx(selectedIdx + 1);
            setSelectedImg(artworks[selectedIdx + 1].imageUrl);
        }
    };

    return (
        <div className="container mx-auto p-10">
            <h1 className="p-2 text-5xl font-bold text-center mb-8">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {artworks.map((art, index) => (
                    <div key={index} className="shadow-lg rounded-lg overflow-hidden bg-white cursor-pointer">
                        <div className="w-full h-64 overflow-hidden" onClick={() => openModal(art.imageUrl, index)}> {/* Clickable image */}
                            <img src={art.imageUrl} alt={art.title} className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="p-4">
                            <h2 className="font-bold">{art.title}</h2>
                            <p>{art.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImg && (
            <div className="modalOverlay">
                <FaTimes className="closeButton" onClick={closeModal} />                    
                    <FaChevronLeft className={`absolute left-20 text-white text-3xl cursor-pointer ${selectedIdx <= 0 ? 'hidden' : ''}`} onClick={goToPrevious} />
                    <FaChevronRight className={`absolute right-20 text-white text-3xl cursor-pointer ${selectedIdx >= artworks.length - 1 ? 'hidden' : ''}`} onClick={goToNext} />
                    <img src={selectedImg} alt="Expanded art" className="max-w-full max-h-full z-10" />
            </div>
            )}
        </div>
    );
};

export default Gallery;
