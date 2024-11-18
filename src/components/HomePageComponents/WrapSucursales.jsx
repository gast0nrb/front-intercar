import { useState, useEffect } from "react";
import Sucursales from "./Sucursales";

const WrapSucursales = (width, height) => {
  const [sucursalesState, setSucursales] = useState([]); //Graba las sucursales con fetch
  const [loading, setLoading] = useState(true);
  const [sucursal, setSucursal] = useState([]);

  useEffect(() => {
    const getSucursales = async () => {
      const fetchSucursales = await fetch(
        "http://localhost:8000/api/v0.5/webintercar/sucursales"
      );
      const data = await fetchSucursales.json();
      setSucursales((prev) => {
        setLoading(false);

        //Setear atributo para agrandar la sucursal en off
        data.data.map((s) => {
          s.showBig = false;
        });
        return [...data.data];
      });
    };
    console.log(sucursalesState[0]);
    getSucursales();
  }, [loading]);

  //FUNCIONES PARA EL ATRACTIVO VISUAL
  function showBigOneSucursal(idSucursal) {
    const arr = [...sucursalesState];
    arr.map((s) => {
      if (idSucursal == s.id) {
        s.showBig = true;
      } else {
        s.showBig = false;
      }
    });
    setSucursal(arr);
  }

  function hideBigOneSucursal() {
    const arr = [...sucursalesState];
    arr.map((s) => {
      s.showBig = false;
    });
    setSucursal(...arr);
  }

  return (
    <>
      {loading ? (
        <p>Cargando sucursales...</p>
      ) : (
        <>
          <h2 className="text-center w-fit mx-auto font-extrabold tracking-widest lg:text-4xl md:text-xl mb-10 bg-neutral-800 text-neutral-300 border-x-4 border-orange-500 px-2 py-1 rounded-sm">
            ¿DONDE ESTAMOS?
          </h2>
          <Sucursales
            hide={hideBigOneSucursal}
            showUp={showBigOneSucursal}
            title={"Santiago, Chile."}
            sucursales={sucursalesState.filter((suc) => {
              return suc.COMUNA.CIUDAD.nombre == "REGIÓN METROPOLITANA";
            })}
          />
          <Sucursales
            hide={hideBigOneSucursal}
            showUp={showBigOneSucursal}
            title={"También estamos en..."}
            sucursales={sucursalesState.filter((suc) => {
              return suc.COMUNA.CIUDAD.nombre != "REGIÓN METROPOLITANA";
            })}
          />
        </>
      )}
    </>
  );
};

export default WrapSucursales;
