import Card from "./Card";

const Productos = ({ title = "DEFAULT TITLE" }) => {
  return (
    <div className="container">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="product-container">
        <div className="right">
          <button>&#62;</button>
        </div>
        <Card />
        <div className="left">
          <button>&#60;</button>
        </div>
      </div>
    </div>
  );
};

export default Productos;
