import Image from "next/image";
const CEOPORTFOLIO = () => {
  return (
    <div>
      -------------------
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident
        velit adipisci ex nemo unde itaque quaerat repudiandae, dolore explicabo
        voluptatibus quae aspernatur facilis similique, enim, natus rem
        inventore sit.
      </p>
      <div>
        <figure>
          <Image src="/asset/normal.jpg" alt="ceo" width={200} height={200} />
        </figure>
        <figcaption>lorem ipsum</figcaption>
      </div>
      --------------
    </div>
  );
};

export default CEOPORTFOLIO;
