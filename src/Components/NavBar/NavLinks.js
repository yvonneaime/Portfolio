
const links = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/about", text: "About" },
];

const NavigationLinks = () => (
    <div className="p-4 flex space-x-4 font-sans">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="p-4 text-xl white hover:text-gray-300 transition duration-120 ease-in-out"
        >
          {link.text}
        </a>
      ))}
    </div>
  );

export default NavigationLinks; 