import {Link} from 'react-router-dom';

const RegistradoPage = ({title,infoUser, msjLargo="En breves momentos nos comunicaremos contigo para entregarte acceso a tu cuenta."}) => {
    return (
        <div className="text-center my-20">
        <h1 className="md:text-sm lg:text-2xl bg-neutral-800 text-neutral-300"><span className="text-orange-500">{infoUser.toUpperCase()}</span> {title.toUpperCase()}</h1>
        <h2 className="md:text-xs text-neutral-500 lg:text-xl">{msjLargo.toUpperCase()}</h2>
        <Link to={`/`} className="bg-neutral-800 my-6 md:w-3/6 lg:w-2/6 text-xs text-neutral-300 rounded-md p-1 hover:text-orange-500">Página de inicio</Link>
        </div>
    )
}


export default RegistradoPage