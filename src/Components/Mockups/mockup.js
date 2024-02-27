import React from 'react';
import './mockups.css'; // Ensure this points to the correct location of your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Mockup data array
const mockup_obj = [
    {
        title: "Split",
        imageUrl: "/split01.png",
        description: "Bill Splitting mobile application.",
        url: "https://xd.adobe.com/view/440c1ef8-8193-46e7-a142-fe147fac8b12-115f/?fullscreen"
    },
    {
        title: "StudentBiz",
        imageUrl: "/Homepage.svg",
        description: "Student Businesses",
        url: "https://xd.adobe.com/view/440c1ef8-8193-46e7-a142-fe147fac8b12-115f/?fullscreen",
    }
];

const Mockups = () => {
    return (
        <div className="whole-container mx-auto px-10 py-20">
            <h1 className="p-4 text-5xl font-bold text-center mb-12">Mockups</h1>
            {mockup_obj.map((mockup, index) => (
                <div key={index} className="mockup-container w-full my-6">
                    <div className="flex justify-between items-center p-4">
                        <div className="mock-title-container"> {/* Container for icon and title */}
                            <FontAwesomeIcon icon={faCircle} className="circle-icon" /> {/* Circle icon */}
                            <div className="mock-title text-xl font-bold"> {mockup.title} </div>
                        </div>
                        <p className="p-6 description">{mockup.description}</p>
                    </div>
                    {mockup.url && (
                        <div className="text-right p-4">
                            <a href={mockup.url} className="view-project-btn inline-block">
                                View Project <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    )}
                    <div className="display">
                        <img src={mockup.imageUrl} alt={mockup.title} className="mockup-image" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Mockups;
