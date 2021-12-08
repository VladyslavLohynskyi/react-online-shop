import Carrousel from "../Carrousel";
import Products from "../Products";

const Section = ({ onAddCart }) => {
  return (
    <div>
      <Carrousel main={true} />
      <Products onAddCart={onAddCart} />
    </div>
  );
};

export default Section;
