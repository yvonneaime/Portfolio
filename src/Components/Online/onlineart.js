import React from 'react';

const artworks = [
    // Array of your artwork objects
    {
        title: "RedEye",
        imageUrl: "/WE40.svg",
        description: "Anime Style  ☆"
    },
    {
        title: "Sonny Angel$",
        imageUrl: "/sonny.svg",
        description: "Sonny Angel Figurines"
    },
    {
        title: "Sailor Moon",
        imageUrl: "/girlcorner.svg",
        description: "✩₊˚.⋆☾⋆⁺₊✧"
    },
];

const OnlineGallery = () => {
    return (
        <div className="container mx-auto p-10">
            <h1 className="p-2 text-5xl font-bold text-center mb-8">Digital Art</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {artworks.map((art, index) => (
                    <div key={index} className="shadow-lg rounded-lg overflow-hidden bg-white">
                        <div className="w-full h-64 overflow-hidden"> {/* Fixed height container */}
                            <img src={art.imageUrl} alt={art.title} className="w-full h-full object-cover object-center" />
                        </div>
                        {/* Details shown for each artwork */}
                        <div className="p-4">
                            <h2 className="font-bold">{art.title}</h2>
                            <p>{art.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnlineGallery;
