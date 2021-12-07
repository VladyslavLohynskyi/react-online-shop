import "./index.css";

const Product = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <img src={process.env.PUBLIC_URL + product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="card-buttons">
          <button className="button-info">Info</button>
          <button className="button-buy">${product.price} - buy</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
