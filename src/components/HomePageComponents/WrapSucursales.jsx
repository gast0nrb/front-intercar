import { useState } from "react";
import Sucursal from "./Sucursal";
import Sucursales from "./Sucursales";

const WrapSucursales = (width, height) => {
  const sucursales = [
    {
      id: 0,
      name: "Nataniel cox 1935 (Casa Matriz)",
      url: "https://maps.app.goo.gl/CzHWbL2TwBjq4QRG6",
      urlWaze:
        "https://ul.waze.com/ul?place=ChIJfw-4vj7FYpYRjfD6TtCzoTo&ll=-33.47165120%2C-70.65002710&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
      ciudad: "Santiago",
      comuna: "Santiago centro",
      direccion: "Avenida Nataniel Cox 1935, bodega 4",
      showBig: false,
    },
    {
      id: 1,
      name: "Diez de julio 413-C",
      url: "https://maps.app.goo.gl/q7XRcGMgx31cKzX18",
      urlWaze:
        "https://ul.waze.com/ul?place=ChIJMVnQnXHFYpYRh02wAAJCMzU&ll=-33.45213560%2C-70.63844520&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
      ciudad: "Santiago",
      comuna: "Santiago centro",
      direccion: "Avenida Diez de Julio 413-c",
      showBig: false,
    },
    {
      id: 2,
      name: "Diez de julio 554",
      url: "https://maps.app.goo.gl/AFzKrKWFU7AKgk598",
      urlWaze:
        "https://ul.waze.com/ul?place=ChIJJ4IJUHLFYpYRcgp9cftJFQ0&ll=-33.45319340%2C-70.64148690&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
      ciudad: "Santiago",
      comuna: "Santiago centro",
      direccion: "Avenida Diez de Julio 554",
      showBig: false,
    },
    {
      id: 3,
      name: "Diez de julio 792",
      url: "https://maps.app.goo.gl/RrjqSDBHZrayt5dQ9",
      urlWaze:
        "https://ul.waze.com/ul?place=ChIJ7TqZLw3FYpYRUQiftHw30Mo&ll=-33.45375170%2C-70.64624750&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
      ciudad: "Santiago",
      comuna: "Santiago centro",
      direccion: "Avenida Diez de Julio 792",
      showBig: false,
    },
    {
      id: 4,
      name: "Estación central",
      url: "https://maps.app.goo.gl/w23sYDzoWMa2g53x5",
      urlWaze:
        "https://ul.waze.com/ul?place=ChIJY0JX5_7EYpYR-owaFXzZpxc&ll=-33.45267900%2C-70.67370870&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
      ciudad: "Santiago",
      comuna: "Estación central",
      direccion: "Avenida Unión Latinoamericana 209",
      showBig: false,
    },
    {
      id: 5,
      name: "Viña del mar, San antonio 1301",
      url: "https://maps.app.goo.gl/7WTZHKr3etFhj6dq5",
      urlWaze:
        "https://ul.waze.com/ul?place=ChIJ_1s1ncTdiZYRn2Qn_jyjq-U&ll=-33.00992440%2C-71.54266420&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
      ciudad: "Viña del mar",
      comuna: "Viña del mar",
      direccion: "San antonio 1301",
      showBig: false,
    },
    {
      id: 6,
      name: "Viña del mar, 14 norte 1172",
      url: "https://maps.app.goo.gl/JUHgPAxHZZuS6C4r9",
      urlWaze:
        "https://ul.waze.com/ul?place=ChIJPR1WYsPdiZYRkcImhcGdA_4&ll=-33.01013610%2C-71.54288020&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
      ciudad: "Viña del mar",
      comuna: "Viña del mar",
      direccion: "14 norte 1172",
      showBig: false,
    },
  ];

  const [stateSucursales, setSucursal] = useState(sucursales);

  function showBigOneSucursal(idSucursal) {
    const arr = [...stateSucursales];
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
    const arr = [...stateSucursales];
    arr.map((s) => {
      s.showBig = false;
    });
    setSucursal(arr);
  }

  return (
    <>
      <h2 className="text-center w-fit mx-auto font-extrabold tracking-widest lg:text-4xl md:text-xl mb-10 bg-neutral-800 text-neutral-300 border-x-4 border-orange-500 px-2 py-1 rounded-sm">
        ¿DONDE ESTAMOS?
      </h2>
      <Sucursales
        hide={hideBigOneSucursal}
        showUp={showBigOneSucursal}
        title={"Santiago, Chile."}
        sucursales={stateSucursales}
        EsStgo={true}
      />
      <Sucursales
        showUp={showBigOneSucursal}
        title={"También estamos en..."}
        sucursales={stateSucursales}
        EsStgo={false}
      />
    </>
  );
};

export default WrapSucursales;
