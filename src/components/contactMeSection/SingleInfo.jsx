import PropTypes from "prop-types";

const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};

// Adding PropTypes validation
SingleInfo.propTypes = {
  text: PropTypes.string.isRequired, // Ensures text is a string
  Image: PropTypes.elementType.isRequired, // Ensures Image is a React component
};

export default SingleInfo;
