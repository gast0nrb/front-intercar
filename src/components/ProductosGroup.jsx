import { useEffect, useState } from "react";
import CardCategory from "./CardCategory";

//Pasar un array en props para desplegar la info de cada producto
const ProductosGroup = ({ setExisten, isBusqueda, currentCategoria }) => {
  const CategoriaProductos = [
    {
      id: 1,
      nombre: "HEADLIGHT",
      productos: [
        {
          codigo: "90008",
          precio: 15900,
          mayor: 8900,
          title: "KIT HEADLIGHT H4 12/24 VOLT T1",
          desc: "KIT HEADLIGHT H4 MULTIVOLTAJE 12/24 VOLT, 6000 KELVIN 55W, 3 MESES DE GARANTÍA Y SISTEMA CANBUS INTEGRADO",
          url: "/90008.png",
        },
        {
          codigo: "91008",
          precio: 15900,
          mayor: 8900,
          title: "KIT HEADLIGHT H4 12/24 VOLT T1",
          desc: "KIT HEADLIGHT H4 MULTIVOLTAJE 12/24 VOLT, 6000 KELVIN 55W, 3 MESES DE GARANTÍA Y SISTEMA CANBUS INTEGRADO",
          url: "/90008.png",
        },
        {
          codigo: "90001",
          precio: 15900,
          mayor: 8900,
          title: "KIT HEADLIGHT H4 12/24 VOLT T1",
          desc: "KIT HEADLIGHT H4 MULTIVOLTAJE 12/24 VOLT, 6000 KELVIN 55W, 3 MESES DE GARANTÍA Y SISTEMA CANBUS INTEGRADO",
          url: "/90008.png",
        },
        {
          codigo: "90002",
          precio: 15900,
          mayor: 8900,
          title: "KIT HEADLIGHT H4 12/24 VOLT T1",
          desc: "KIT HEADLIGHT H4 MULTIVOLTAJE 12/24 VOLT, 6000 KELVIN 55W, 3 MESES DE GARANTÍA Y SISTEMA CANBUS INTEGRADO",
          url: "/90008.png",
        },
        {
          codigo: "90003",
          precio: 15900,
          mayor: 8900,
          title: "KIT HEADLIGHT H4 12/24 VOLT T1",
          desc: "KIT HEADLIGHT H4 MULTIVOLTAJE 12/24 VOLT, 6000 KELVIN 55W, 3 MESES DE GARANTÍA Y SISTEMA CANBUS INTEGRADO",
          url: "/90008.png",
        },
        {
          codigo: "90004",
          precio: 15900,
          mayor: 8900,
          title: "KIT HEADLIGHT H4 12/24 VOLT T1",
          desc: "KIT HEADLIGHT H4 MULTIVOLTAJE 12/24 VOLT, 6000 KELVIN 55W, 3 MESES DE GARANTÍA Y SISTEMA CANBUS INTEGRADO",
          url: "/90008.png",
        },
      ],
    },
    {
      id: 2,
      nombre: "AMPOLLETAS",
      productos: [
        {
          codigo: "10064",
          precio: 1000,
          mayor: 400,
          title: "AMPOLLETA 12 VOLT 55 WATTs",
          desc: "AMPOLLETA 12 volts 55 watts para vehiculo",
          url: "/10064.JPG",
        },
      ],
    },
    {
      id: 3,
      nombre: "SEGURIdad",
      productos: [],
    },
  ];

  const [productos, setProductos] = useState(
    CategoriaProductos.filter((v) => v.id == currentCategoria)[0]
  );

  useEffect(() => {
    const lengthProductosEnCategoria = CategoriaProductos.filter(
      (cat) => cat.id == currentCategoria
    )[0].productos;
    if (lengthProductosEnCategoria.length == 0) {
      setExisten(false);
    } else {
      setExisten(true);
    }
    setProductos(CategoriaProductos.filter((v) => v.id == currentCategoria)[0]);
  }, [currentCategoria]);

  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 mx-auto w-11/12">
        {productos.productos.map((producto) => (
          <CardCategory
            isBusqueda={false}
            precioDetalle={producto.precio}
            precioMayorista={producto.mayor}
            title={producto.title}
            codigo={producto.codigo}
            url={producto.url}
            key={producto.codigo}
          />
        ))}
      </div>
    </>
  );
};

export default ProductosGroup;
