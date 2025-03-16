import { Link } from "react-scroll";
import rahulbanikPDF from "../../../public/cvPDF/rahulbanik.pdf";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
  { link: "CV Download", section: "cvDownload" },
];

const NavbarLinks = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = rahulbanikPDF;
    link.download = "rahulbanik.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            {link?.section === "cvDownload" ? (
              <Link
                onClick={handleDownload}
                spy={true}
                smooth={true}
                duration={500}
                offset={-130}
                to={link.section}
                className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
              >
                {link.link}
              </Link>
            ) : (
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-130}
                to={link.section}
                className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
              >
                {link.link}
              </Link>
            )}
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
