import { useState } from "react";

const Sucursal = ({
  url,
  urlWaze,
  direccion,
  comuna,
  ciudad,
  nombre,
  contacto,
  id,
  showUp,
  showBig,
  hide
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <div className="border-b-2 shadow-md text-center group border-transparent hover:border-orange-500 duration-500">
        <div className="">
          <img src="local.jpg" alt="" className=" w-12/12" />
        </div>
        <div className="">
          <h3
            className={`tracking-wider font-bold lg:text-sm md:text-xs ${
              !showBig
                ? "overflow-hidden text-ellipsis text-nowrap"
                : "text-orange-500"
            }`}
          >
            {nombre}
          </h3>
        </div>
        {showBig ? (
          <div className="text-xs p-0.5">
            <div className="flex border-t-2 justify-center">
              <img src="/place.svg" className="md:w-4 lg:w-4" alt="" />
              <p>{direccion}.</p>
            </div>
            <div className="text-center border-t-2">
              <p className="my-auto">
                <span className="font-bold">{ciudad}</span>/{comuna}
              </p>
            </div>
            <div className="flex border-y-2 justify-center">
              <div className="my-auto lg:basis-5/12 md:basis-6/12 p-1 flex justify-center">
                <img src="/road.svg" className="md:w-3 lg:w-4" alt="" />
                <p className="font-bold">Viajar con</p>
              </div>
              <div className="border-l-2 grow">
                <div className="">
                  <a target="_blank" href={`${urlWaze}`} className="flex justify-center gap-0.5 p-0.5 mx-auto hover:scale-110 duration-300">
                    <img src="/waze.svg" className="md:w-3 lg:w-4"></img>
                    Waze
                  </a>
                </div>
                <div className="border-t-2">
                  <a target="_blank" href={`${url}`} className="flex p-0.5 gap-0.5 mx-auto hover:scale-110 duration-300 justify-center">
                    <img src="/maps.svg" className="md:w-3 lg:w-4"></img>
                    Maps
                  </a>
                </div>
              </div>
            </div>
            <button
              onMouseOver={() => setFocus(true)}
              onMouseLeave={() => setFocus(false)}
              onClick={()=> {
                  setFocus(false);
                  hide();
              }}
            >
              <img
                src={`${focus ? "/collapseActive.svg" : "collapse.svg"}`}
                className="md:w-3 lg:w-4 pt-1"
                alt=""
              />
            </button>
          </div>
        ) : (
          <button
            onMouseOver={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
            className="mx-auto"
            onClick={() => {
              setFocus(false);
              showUp(id);
            }}
          >
            <img
              src={`${focus ? "/downActive.svg" : "downArrow.svg"}`}
              alt=""
              className="md:w-3 lg:w-4"
            />
          </button>
        )}
      </div>
    </>
  );
};

export default Sucursal;
