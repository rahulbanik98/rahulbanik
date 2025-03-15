import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import CG from "../../../public/images/CG.png";
import BBARC from "../../../public/images/BBARC.png";
import PKBUSA from "../../../public/images/PKBUSA.png";
import GAMEDAY from "../../../public/images/GAMEDAY.png";
import PKHEALTH from "../../../public/images/PKHEALTH.png";

const projects = [
  {
    name: "Corporate Gear",
    year: "Mar2022",
    align: "right",
    image: CG,
    link: "corporategear",
  },
  {
    name: "Broken Bottle Arcade",
    year: "Sept2022",
    align: "left",
    image: BBARC,
    link: "bbarcade",
  },
  {
    name: "Busa Corporategear",
    year: "Jan2023",
    align: "right",
    image: PKBUSA,
    link: "busa.corporategear",
  },
  {
    name: "Gameday Gear",
    year: "May2024",
    align: "left",
    image: GAMEDAY,
    link: "gamedaygear",
  },
  {
    name: "PKHealthgear",
    year: "May2024",
    align: "right",
    image: PKHEALTH,
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
