import { Link } from "react-router-dom";

const QuienesItem = ({busqueda, title="DEFAULT TITLE", srcImgActive, srcImgInactive, text="DEFAULT TEXT DEFAULT DEFAULT DEFAULT DEFAULT DEFAULT DEFAULT", textButton="Ver", isLink=true}) => {
    return (
       <div className="md:w-5/12 grow lg:w-3/12 shadow-md text-center mx-2 group rounded-md my-3 p-2 border-2 bg-neutral-800">
            <div className="flex justify-center border-b-2 md:border-b-orange-500 lg:border-b-orange-300 lg:group-hover:border-orange-500">
                <h3 className="text-neutral-300 group-hover:text-white font-bold tracking-widest">{title}</h3>
            </div>
            <p className="text-sm text-neutral-300 group-hover:text-white">
                {text.toLowerCase()}.
            </p>
            {
                isLink ?
            <Link  to={`/busqueda/${busqueda}`} className="font-semibold text-xs hover:text-orange-500 text-neutral-600 hover:border-neutral-300 border-neutral-600 border-2 rounded-sm px-2">{textButton}</Link>
            :
            <a  href={`#${busqueda}`} className="font-semibold text-xs hover:text-orange-500 text-neutral-600 hover:border-neutral-300 border-neutral-600 border-2 rounded-sm px-2">{textButton}</a>
            }
       </div> 
    )
}

export default QuienesItem;