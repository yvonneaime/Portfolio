const Bio = () => {
    const skills = [
      "User Experience Design",
      "Mobile & Web UI Design",
      "Front-End Development",
      "Wireframing",
      "Usability testing",
      "Prototyping",
      "User Research",
      "Bilingual",
      "Problem-solving",
      "Collaboration",
      
    ];
  
    return (
      <div className="p-10 px-20 py-10">
        <div className="p-4 flex flex-col md:flex-row items-center space-x-4 mb-10">
          <div className="p-10 flex-shrink-0">
            <img src="/profile_pix.jpg" alt="Profile" className="rounded-full border-4 border-gray-500 shadow-1g mb-4 md:mb-0 md:mr-8" />
          </div>
  
          <div className="text-xl mt-4 md:mt-0">
            <h1 className="text-6xl font-bold mb-6">Hi, I'm Yvonne 👋</h1>
            <p className="mb-4">I'm a UX/UI Designer with over two years experience conceptualizing and crafting digital products, helping businesses and non-profits expand their capacity for impact 🚀</p>
            <p className="mb-4"> 🎓</p>
            <p>Let's talk design!</p>
          </div>
        </div>
  
        {/* Skills Section */}
        <div className= "p-4">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-6">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-3 bg-blue-200 text-blue-800 font-semibold rounded-full shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Bio;
  