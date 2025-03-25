import Image from "next/image";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.main}>
      <figure className={classes.website_logo}>
        <Image
          src="/asset/AdharvKidsLogo.svg"
          alt="website-logo"
          layout="fill"
          objectFit="contain"
        />
      </figure>
      <figcaption className={classes.website_text}>
        Adharv Children's Clinic
      </figcaption>
    </div>
  );
};

export default Navbar;
