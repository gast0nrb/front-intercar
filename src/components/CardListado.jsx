import { useState } from "react"

const CardListado = ({checkProp, title="default title", description="default description with a lot of characters."}) => {
    const [cantidad, setCantidad] = useState(0);
    return (
        <>
            <div className="flex">
               <div>
                <img src="/90008.png" alt="" className="" />
                </div>
                <div>
                <h3 className="text-2xl font-bold text-neutral-800 mx-auto">{title.toUpperCase()}</h3>
                <p className="text-xl font-bold text-neutral-800">{description.toUpperCase()}</p>
                </div>
            </div>
            <div>PONER PRECIO AQUI</div>
            {
                checkProp ? 
            <div className="">
                <h3>CANTIDAD</h3>
                <p className="">{cantidad}</p>
            </div> 
            :
            <div className="">
                <h3>CANTIDAD</h3>
                <button className="">-</button>
                <p className="">{cantidad}</p>
                <button className="">+</button>
            </div>
            }
        </>
    )
}

export default CardListado