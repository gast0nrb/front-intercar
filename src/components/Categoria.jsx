import { Link } from "react-router-dom";

const Categoria = ({ categoria }) => {
  return (
    <div className="h-11 md:text-2xl lg:text-4xl pt-5 font-bold lg:pl-5 md:text-center lg:text-start">
      <h2 className="">
        CATEGORIA{" "}
        <Link
          to={`/categorias/${categoria.id}`}
          className="text-orange-500 hover:bg-neutral-800 duration-300 rounded-md p-1"
        >
          {" "}
          {categoria.nombre}
        </Link>
      </h2>
    </div>
  );
};

export default Categoria;
