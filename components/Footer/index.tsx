import Link from "next/link";
import classes from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
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
      <hr className={classes.footerLine} />
      <div>
        <span>&copy; 2025 Adharvs Children Clinic, All rights reserved.</span>
        <Link href="/terms">Terms</Link>
        <div className={classes.dot}>dot</div>
        <Link href="/sitemap.xml">Sitemap</Link>
      </div>
    </div>
  );
};

export default Footer;
