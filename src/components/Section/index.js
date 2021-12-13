import Carrousel from "../Carrousel";
import Products from "../Products";

const Section = ({ onAddCart, onOpenSuccess }) => {
  return (
    <div>
      <Carrousel main={true} />
      <Products onAddCart={onAddCart} onOpenSuccess={onOpenSuccess} />
    </div>
  );
};

export default Section;
