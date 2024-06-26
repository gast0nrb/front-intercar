import { useParams } from "react-router-dom";
import Listado from "../components/Listado";
import { Link } from "react-router-dom";

const CarritoPage = ({ btn1, btn2 }) => {
  const { check, id } = useParams();
  const checked = () => {
    //Este parametro permite decirle a los componentes si fue chequeado o no la cotización.
    if (check == 0) {
      return false;
    }
    if (parseInt(check) >= 1) {
      return true;
    }
  };
  console.log(check);

  /* *

el prop check revisa para saber si desplegamos o no los botones, estos solo se despliegan si el carro ya fue revisado

** **/
  return (
    <div className="text-center w-full my-10">
      <h1 className="lg:text-3xl md:text-lg text-neutral-800 mx-auto rounded-sm font-extrabold">
        {"Tu carrito número ".toUpperCase() + id}
      </h1>
      <Listado checkProp={checked()} />
    </div>
  );
};

export default CarritoPage;
