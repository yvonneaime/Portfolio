import React from 'react';
import './mockups.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Mockup data array
const mockup_obj = [
    {
        title: "Split",
        additionalText: "MARKETING APP REDESIGN",
        imageUrl: "/Split.svg",
        description: "Innovative bill splitting app designed to streamline the process of sharing expenses among friends, family, or colleagues.",
        url: "https://xd.adobe.com/view/440c1ef8-8193-46e7-a142-fe147fac8b12-115f/?fullscreen",
        shape: "circle"
    },
    {
        title: "StudentBiz",
        additionalText: "WEBSITE DESIGN",
        imageUrl: "/Homepage.svg",
        description: "A website concept that allows students to highlight their entrepreneurial endeavors.",
        url: "https://www.figma.com/proto/CDdfABMEd5LByQUvv2CarP/DIG4104%3A-High-Fidelity?type=design&node-id=1-23&t=7cJeuRpqaPKOVAob-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=263%3A427&show-proto-sidebar=1&mode=design",
        shape: "square"
    }
];

const Mockups = () => {
    return (
        <div className="whole-container mx-auto px-10 py-20">
        <h1 className="p-4 text-5xl font-bold text-center mb-12">Mockups</h1>
        {mockup_obj.map((mockup, index) => (
            <div key={index} className="mockup-container w-full my-6">
                <div className="mockup-content flex justify-between items-start p-4">
                    <div className="mockup-title-column"> {/* Container for icon, title, and additional text */}
                        <div className="mock-title-container flex items-center">
                            {mockup.shape === 'circle' && (
                                <FontAwesomeIcon icon={faCircle} className="circle-icon mr-2" size="2x" />
                            )}
                            {mockup.shape === 'square' && (
                                <FontAwesomeIcon icon={faSquare} className="square-icon mr-2" size="2x" />
                            )}
                            <div>
                                <div className="mock-title text-xl font-medium"> {mockup.title} </div>
                                <div className="mock-additional-text" style={{fontSize: 'inherit'}}>
                                    {mockup.additionalText}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mockup-description-column"> {/* Container for description and view project button */}
                        <p className="description mb-4">{mockup.description}</p>
                        {mockup.url && (
                            <a href={mockup.url} className="view-project-btn inline-block">
                                View Project <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        )}
                    </div>
                </div>
                <div className="display">
                    <img src={mockup.imageUrl} alt={mockup.title} className="mockup-image" />
                </div>
            </div>
        ))}
    </div>
);
};

export default Mockups;
