import React from 'react';
import './About.css';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div className="p-10">
            <h1 className=" p-8 text-5xl font-bold text-center mb-12">About Me</h1>
            <div className="aboutContainer flex flex-col md:flex-row p-4 mb-8">
                <img src="/aboutprofile.jpg" alt="Profile Image" className="profileImage" />
                <div className="profileText">
                    <h2 className="text-3xl font-bold p-2 mb-6">Nice to Meet You!</h2>
                        <p className="text-xl p-2 mb-4">
                            I am Yvonne Aime. I am a UI/UX designer with a distinct blend of creativity, detail orientation, and a
                            deep commitment to collaboration. My journey in the tech industry is defined by a constant eagerness to
                            learn, innovate, and deliver exceptional results. My creative process is user-centric, focusing on delivering
                            designs that are not only visually appealing but also enhance user interaction and satisfaction.
                        </p>
                        <p className="text-xl p-2 mb-4">  My commitment to continuous learning keeps
                            me at the cutting edge of design trends and technologies. My background in programming is broad and versatile,
                            encompassing web development with React, game creation using Unity, and proficiency in languages like C, Python,
                            and PHP. This diversity in skills underscores my adaptability and commitment to staying at the forefront of technological
                            advancement.
                        </p>
                        <p className="text-xl p-2 mb-4">It’s been an absolute
                            joy and privilege working on the projects I’m passionate about.
                        </p>
                    </div>
                
            </div>

            <div className="flex flex-col md:flex-row justify-between p-6 mb-8">
                <div className="p-2 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-3">Skills</h3>
                    <ul className="list-disc list-inside">
                        <li>UI/UX Design</li>
                        <li>Wireframing</li>
                        <li>Front-End Development</li>
                        <li>Bilingual (English and Mandarin)</li>
                        <li>Collaboration</li>
                    </ul>
                </div>
                <div className="p-2 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-3">Languages</h3>
                    <ul className="list-disc list-inside">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>C</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="p-2 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-3">Tools</h3>
                    <ul className="list-disc list-inside">
                        <li>Adobe XD</li>
                        <li>Figma</li>
                        <li>Unity</li>
                        <li>InVision</li>
                        <li>Photoshop</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold p-2 mb-6">Resume</h3>
                    <div className="p-2">
                        <a href="https://drive.google.com/file/d/1llzTslG4RebtWelWAZVzADZkC3Y3M8vB/view?usp=sharing" download className="p-2 bg-blue-500 text-white px-4 py-2 rounded shadow-1g">
                            Download
                        </a>
                    </div>
                </div>
            </div>
            {/* Contact Info Section */}
            <div className="mt-10">
                <div className="p-20 flex justify-center space-x-6">
                    <a href="mailto:yvonneaime0@gmail.com" className="text-blue-500 hover:text-gray-800">
                        <FaEnvelope size={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/yvonne-aime-528295243/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaLinkedin size={40} />
                    </a>
                    <a href="https://github.com/yvonneaime" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">
                        <FaGithub size={40} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
