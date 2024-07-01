import { useState } from "react";
import Sucursal from "./Sucursal"

const Sucursales = (width, height) => {
  const sucursales = [
    {
      id: 0,
      name: "Santiago, Nataniel cox 1935 (Casa Matriz)",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.1420925083908!2d-70.65260202374024!3d-33.47165117338104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c53ebeb80f7f%3A0x3aa1b3d04efaf08d!2sNataniel%20Cox%201935%2C%208320000%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1716828704159!5m2!1ses-419!2scl",
    },
    {
      id: 1,
      name: "Santiago, Av. Diez de julio huamachuco 413-C",
      ulr: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8915806166956!2d-70.64102012526416!3d-33.452131097596585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5719dd05931%3A0x3533420200b04d87!2sDiez%20de%20Julio%20413%2C%208330552%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1716834765389!5m2!1ses!2scl",
    },
    {
      id: 2,
      name: "Santiago, Av. Diez de julio huamachuco 554",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8508036728076!2d-70.6440618237408!3d-33.45319337338856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57250098227%3A0xd1549fb717d0a72!2sDiez%20de%20Julio%20554%2C%208330637%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1716829166444!5m2!1ses-419!2scl",
    },
    {
      id: 3,
      name: "Santiago, Av. Diez de julio huamachuco 792",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8293720867473!2d-70.64882242374091!3d-33.4537516733882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c50d2f993aed%3A0xcad0377cb49f0851!2sDiez%20de%20Julio%20792%2C%208330697%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1716829188777!5m2!1ses-419!2scl",
    },
    {
      id: 4,
      name: "Santiago, Av. Unión Latinoamericana 209",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8705487585476!2d-70.67370869999999!3d-33.452679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4fee7574263%3A0x17a7d97c151a8cfa!2sUni%C3%B3n%20Latinoamericana%20209%2C%208370220%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1716829224352!5m2!1ses-419!2scl",
    },
    {
      id: 5,
      name: "Viña del mar, San antonio 1301",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.7667528176976!2d-71.54523912375659!3d-33.009924373567216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689ddc49d355bff%3A0xe5aba33cfe27649f!2sSan%20Antonio%201301%2C%202530911%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1716829248429!5m2!1ses-419!2scl",
    },
    {
      id: 6,
      name: "Viña del mar, 14 Norte 1172",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.758721678378!2d-71.54545512375672!3d-33.01013607356692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689ddc362561d3d%3A0xfe039dc18526c291!2s14%20Nte.%201172%2C%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1716829269581!5m2!1ses-419!2scl",
    },
  ];
  const [currentSucursal, setSucursal] = useState(sucursales[0]);
  //Component
  return (
    <div className="mb-10">
      <h2 className="text-center w-fit mx-auto font-extrabold tracking-widest lg:text-4xl md:text-xl bg-neutral-800 text-neutral-300 border-x-4 border-orange-500 px-2 py-1 rounded-sm">
        ¿DONDE ESTAMOS?
      </h2>
    <Sucursal/>
    <Sucursal/>
    </div>
  );
};

export default Sucursales;
