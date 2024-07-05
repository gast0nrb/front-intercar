import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Vacio from "../components/Vacio";
import CategoriaFull from "../components/CategoriaPageComponents/CategoriaFull";

const CategoriaPage = () => {
  const { idParams } = useParams(); /*
    Se le pasa el idParams a categoria full, con el fin de al renderizar
    el componente de categoría full utilice este valor para mostrar en el selectCategorias.
    También se utiliza en el productosGroup para renderizar según el id entregado
  */

  //Categorias se les pasa a Categoria full, el después lo entrega a
  //ProductosGroup, el cual compara con los productos cargados
  //También se le pasa a selectCategorias, así lo logra renderizar
  const Categorias = [
    {
      id: 1,
      nombre: "HEADLIGHT",
    },
    {
      id: 2,
      nombre: "AMPOLLETAS",
    },
    {
      id: 3,
      nombre: "Seguridad",
    },
  ];

  /*
    Valida si existen categorías correspondientes al parametro.
    Si no existen esta página renderiza en condición. Si es true permite mostrar el componente,
    sino renderiza un mensaje de que no se ha encontrado categoría.
  */
  function validarParamsConCategorias() {
    const Cat = Categorias.filter((v) => v.id == idParams);
    if (Cat.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  //Si existe o no una categoría con la función de arriba.
  const [existeCategoria, setExiste] = useState(validarParamsConCategorias);

  //Setea la categoría actual, muy importante, ya que tiene un useEffect asociado.
  //En el componente productosGroup, que cambia al setearlo.
  //Se setea desde SelectCategoria en conjunto con el navigate
  const [currentCategoria, setCurrentCategoria] = useState(idParams);

  return (
    <>
      {existeCategoria ? (
        <CategoriaFull
          currentCategoria={currentCategoria}
          setCurrentCategoria={setCurrentCategoria}
          Categorias={Categorias}
          idParams={idParams}
        />
      ) : (
        <>
          <Vacio
            msjGrande={"No existen categorías para el id que indicaste :("}
          />
        </>
      )}
    </>
  );
};

export default CategoriaPage;
