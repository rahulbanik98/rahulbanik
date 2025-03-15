import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import websiteImg2 from "../../../public/images/website-img-2.webp";
import websiteImg3 from "../../../public/images/website-img-3.jpg";
import websiteImg4 from "../../../public/images/website-img-4.jpg";

const projects = [
  {
    name: "Corporate Gear",
    year: "Mar2022",
    align: "right",
    image: "../../../public/images/website-img-1.jpg",
    link: "corporategear",
  },
  {
    name: "Broken Bottle Arcade",
    year: "Sept2022",
    align: "left",
    image: { websiteImg2 },
    link: "bbarcade",
  },
  {
    name: "Busa Corporategear",
    year: "Jan2023",
    align: "right",
    image: { websiteImg3 },
    link: "busa.corporategear",
  },
  {
    name: "Gameday Gear",
    year: "May2024",
    align: "left",
    image: { websiteImg4 },
    link: "gamedaygear",
  },
  {
    name: "PKHealthgear",
    year: "May2024",
    align: "right",
    image: { websiteImg4 },
    link: "pkhealthgear",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects?.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project?.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
