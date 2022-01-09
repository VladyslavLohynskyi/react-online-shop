import Carrousel from "../Carrousel";
import Products from "../Products";

const Section = ({ onOpenSuccess }) => {
  return (
    <div>
      <Carrousel main={true} />
      <Products onOpenSuccess={onOpenSuccess} />
    </div>
  );
};

export default Section;
