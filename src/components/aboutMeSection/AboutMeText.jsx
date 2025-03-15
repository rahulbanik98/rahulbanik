import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Front-End Developer with 3 years of experience in Software and
        Application Development, specializing in React.js, Next.js, TypeScript,
        JavaScript. Proficient in Redux, Redux Toolkit, React Hooks, and Context
        API for efficient state management. Experienced in HTML5, CSS3, Tailwind
        CSS, and Bootstrap, ensuring responsive web design and web performance
        optimization. Contributed to building a food delivery platform and a
        Content Management System (CMS). Skilled in REST APIs, API Integration,
        and GraphQL for seamless data interactions. Strong understanding of
        Backend Basics, SDLC, and experience with Git and GitHub, Webpack, and
        Babel. Passionate about problem-solving, data structures and algorithms,
        debugging troubleshooting, and collaborating effectively within teams.
        Excellent communication skills with a focus on delivering high-quality
        applications.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
