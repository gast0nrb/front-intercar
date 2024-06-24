import { useParams } from "react-router-dom";
import Listado from "../components/Listado";

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
      {check>0 ? (
        <></>
      ) : (
        <button className=" font-bold hover:shadow-xl duration-300  hover:text-orange-500 p-1 shadow-md rounded-md text-neutral-500 text-sm w-auto mb-10">
          ENVIAR COTIZACIÓN
        </button>
      )}
    </div>
  );
};

export default CarritoPage;
