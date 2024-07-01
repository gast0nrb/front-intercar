import Card from "./Card";

const ProductosWrap = () => {
  return (
    <div className="inline-flex">
      <div>
        <Card />
      </div>
      <div className="md:hidden lg:block">
        <Card />
      </div>
      <div className="md:hidden lg:block">
        <Card />
      </div>
    </div>
  );
};

export default ProductosWrap;
