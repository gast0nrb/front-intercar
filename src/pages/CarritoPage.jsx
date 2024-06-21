import Listado from "../components/Listado"

const CarritoPage = ({title, btn1, btn2, checkProp}) => {


/* *

el prop check revisa para saber si desplegamos o no los botones, estos solo se despliegan si el carro ya fue revisado

** **/
 return (
    <div className="text-center w-full my-10">
        <h1 className="lg:text-3xl md:text-lg text-neutral-800 mx-auto rounded-sm font-extrabold">{title.toUpperCase()}</h1>
        <div hidden={!checkProp}>
            <button className={`rounded-l-md font-bold md:text-xs lg:text-sm  md:w-5/12 lg:w-3/12 p-1 bg-neutral-800 text-neutral-300 hover:text-orange-500`}>{btn1}</button>
            <button className={`rounded-r-md font-bold md:text-xs lg:text-sm md:w-5/12 lg:w-3/12 p-1 bg-orange-500 text-neutral-800 hover:text-white`}>{btn2}</button>
        </div>
        <Listado checkProp={checkProp}/>
    </div>
)
}

export default CarritoPage;