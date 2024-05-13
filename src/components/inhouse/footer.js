import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div
      className={
        "w-full flex flex-col md:flex-row bg-[#1F3042] text-gray-300 px-4 py-8 md:py-12 justify-around"
      }
    >
      {/*contact us*/}
      <div className={"w-full md:w-[30%]"}>
        <h1 className={"text-xl md:text-3xl my-4"}>
          Diploma in (MLT) Medical Laboratory Technology
        </h1>
        <p></p>
      </div>
      {/*find us*/}
      <div className={"w-full md:w-[30%]"}>
        <h1 className={"text-xl md:text-3xl my-4"}>Find Us</h1>
        <div className={"flex gap-4"}>
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
      {/*contact info*/}
      <div className={"w-full md:w-[30%] flex flex-col gap-4"}>
        <h1 className={"text-xl md:text-3xl my-4"}>Contact Us</h1>
        <div className={"flex gap-4 items-center"}>
          <LocationOnIcon /> <span>Put/22 address here</span>
        </div>
        <div className={"flex gap-4 items-center"}>
          <EmailIcon /> <span>inquiries@gmail.com</span>
        </div>
        <div className={"flex gap-4 items-center"}>
          <CallIcon /> <span>+94 11 123 1234</span>
        </div>
        <div className={"flex gap-4 items-center"}>
          <PhoneIphoneIcon /> <span>+94 76 123 1234</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
