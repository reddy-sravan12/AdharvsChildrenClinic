// import { getServerSideProps } from "next/dist/build/templates/pages";
import classes from "../../components/Terms/terms.module.css";

const Terms = (param: any) => {
  // const data = getTheApiDetails().then((res) => res);
  console.log(param);
  return <div>Hello</div>;
};

export function getServerSideProps() {
  const getTheApiDetails = async () => {
    await fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((res) => res);
  };
  return {
    params: { content: JSON.stringify(getTheApiDetails) },
  };
}

export default Terms;
