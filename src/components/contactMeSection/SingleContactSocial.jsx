import PropTypes from "prop-types";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
      <a href={link} className="cursor-pointer" target="_blank">
        <Icon />
      </a>
    </div>
  );
};

SingleContactSocial.propTypes = {
  Icon: PropTypes.elementType.isRequired, // Ensures Icon is a React component
  link: PropTypes.string.isRequired, // Ensures link is a string
};

export default SingleContactSocial;
