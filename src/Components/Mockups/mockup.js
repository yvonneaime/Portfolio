import React from 'react';
import './mockups.css'; // Make sure to create this CSS file

const mockup_obj = [
    {
        title: "Split",
        imageUrl: "/split01.png",
        description: "Bill Splitting mobile application.",
        url: "https://xd.adobe.com/view/440c1ef8-8193-46e7-a142-fe147fac8b12-115f/?fullscreen"
    },
    {
        title: "#002",
        imageUrl: "/Homepage.svg",
        description: "Student Businesses",
        url:"",
        type: "desktop" 
    }
    // Add more mockups here in the future
];

const Mockups = () => {
    return (
        <div className="container mx-auto p-10">
        <h1 className="p-2 text-5xl font-bold text-center mb-8">Mockups</h1>
        <div className="flex flex-wrap justify-center">
            {mockup_obj.map((mockup, index) => (
                <div key={index} className="mockup-container m-4">
                    <div className={mockup.type === "mobile" ? "iphone-display" : "desktop-display"}>
                        <img src={mockup.imageUrl} alt={mockup.title} className="mockup-image" />
                    </div>
                    <h1 className="description mt-2">{mockup.description}</h1>
                </div>
            ))}
        </div>
    </div>
    )
};

export default Mockups;
