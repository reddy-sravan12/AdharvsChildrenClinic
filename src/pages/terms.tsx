import classes from "../../components/Terms/terms.module.css";

const Terms = () => {
  return (
    <div>
      <h1 className={classes.mainHead}>Terms of Use</h1>
      <p className={classes.mainpara}>
        Information collected on this website will be used according to the
        following guidelines:{" "}
      </p>
      <sub className={classes.sub}>
        This website or any portion of this website may not be reproduced,
        modified, duplicated, adapted, copied, republished, uploaded, posted,
        sold, re-sold, distributed, transmitted, or otherwise exploited for any
        purpose without prior express written consent of Adharv Children's
        hospital Clinic. If you have any questions regarding these Terms of Use,
        please feel free to contact us by clicking here.
      </sub>
    </div>
  );
};

export default Terms;
