import React from 'react';
import { Link } from 'react-router-dom';

const projectSections = [
    // (Projects) UI/UX Design Section
    {
        category: "UI/UX Design",
        projects: [
            {
                title: "Mockups",
                description: "Wireframes and mockups - UI/UX - Visuals",
                imageUrl: "/mockupthumb.png",
            },
            {
                title: "Case Studies",
                description: "Marketing website - UI/UX - Visuals",
                imageUrl: "/casestudythumb.png",
            },
            // ... more projects
        ],
    },
    // (Projects) Graphic Design & Art Section
    {
        category: "Graphic Design & Art",
        projects: [
            {
                title: "Paintings",
                description: "Illustrations made with various mediums",
                imageUrl: "/newsPrint.jpg",
            },
            {
                title: "Digital Works",
                description: "Visuals created digitally",
                imageUrl: "/sonny.svg",
            },
        ],
    },
    // (Projects) Programming Section
    {
        category: "Software & Development",
        projects: [
            {
                title: "Ruby's Challenge",
                description: "Using Unity game engine, back-end interaction using C#",
                imageUrl: "/gameRuby.png",
                url: "https://play.unity.com/mg/other/ruby-s-challenge-3",
            },
            {
                title: "Roll the Ball!",
                description: "Game using Unity, back-end interaction using C#",
                imageUrl: "/gameRollBall.png",
                url: "https://play.unity.com/mg/other/challenge-1-roll-a-ball-challenge-1",
            },
            {
                title: "Exercise Web App",
                description: "Choose Your Workout! Browser based application, made with Node JS and React",
                imageUrl: "/exerciseReact.png",
                url: "https://yvonneaime.github.io/Updated-Exercise-App/",
            },
        ],
    },
    // ... more sections
];

const Projects = () => {
    return (
        <div className="container mx-auto p-10">
        <h1 className="p-2 text-5xl font-bold text-center mb-8">Projects</h1>
        {projectSections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
                <h2 className="p-4 text-3xl font-bold mb-4">{section.category}</h2>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-10">
                    {section.projects.map((project, projectIdx) => (
                        <div key={projectIdx} className="shadow-lg rounded-lg overflow-hidden bg-white">
                            {section.category === "Graphic Design & Art" && project.title === "Paintings" ? (
                                <Link to="/gallery">
                                    <div className="w-full h-48 bg-gray-200 flex justify-center items-center overflow-hidden">
                                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                                    </div>
                                </Link>
                                 ) : (section.category === "Graphic Design & Art" && project.title === "Digital Works") ? (
                                    <Link to="/onlineart">
                                        <div className="w-full h-48 bg-gray-200 flex justify-center items-center overflow-hidden">
                                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                                        </div>
                                    </Link>
                                ) :
                                (section.category === "UI/UX Design" && project.title === "Mockups") ? (
                                    <Link to="/mockups">
                                        <div className="w-full h-48 bg-gray-200 flex justify-center items-center overflow-hidden">
                                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                                        </div>
                                    </Link>
                                ) 
                                : (
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <div className="w-full h-48 bg-gray-200 flex justify-center items-center overflow-hidden">
                                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                                    </div>
                                </a>
                            )}
                            <div className="p-6">
                                <h3 className="font-bold">{project.title}</h3>
                                <p className="text-sm text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);
};

export default Projects;