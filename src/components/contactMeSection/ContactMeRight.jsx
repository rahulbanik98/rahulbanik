import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import emailImage from "../../../public/images/email-image.png";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src={emailImage} alt="emailImage" className="max-w-[300px]" />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
