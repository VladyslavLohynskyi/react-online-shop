import Carrousel from "../Carrousel";
import Products from "../Products";

const Section = () => {
  return (
    <div>
      <Carrousel main={true} />
      <Products />
    </div>
  );
};

export default Section;
