import PropTypes from "prop-types";

const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-cyan mb-5">{number}</p>
      <p className="font-bold text-xl text-lightGrey uppercase -mt-4">{text}</p>
    </div>
  );
};

// Adding PropTypes validation
ExperienceInfo.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Allows number or string
  text: PropTypes.string.isRequired, // Ensures text is a string
};

export default ExperienceInfo;
