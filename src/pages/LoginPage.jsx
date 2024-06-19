import { Link } from "react-router-dom";
import Login from "../components/Login"

const LoginPage = () => {
  return (
    <>
        <Login/>
        <div className="lg:w-2/6 rounded-sm shadow-md shadow-neutral-300 mx-auto text-center mb-6 md:w-11/12">
            <h3 className="lg:text-xl md:text-lg text-neutral-800 font-bold">¿AÚN NO TIENES CUENTA?</h3>
            <Link to={`/registro`} className="text-sm text-orange-300 hover:text-orange-500 underline">¡Crear mi cuenta!</Link>
        </div>
    </>
  );
};

export default LoginPage;
