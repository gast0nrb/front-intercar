import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="md:w-11/12 lg:w-2/3 max-w-xs text-center mx-auto shadow-md rounded-md p-2 m-6 text-neutral-700 bg-neutral-100 border-2">
      <h2 className="font-bold md:text-xl lg:text-2xl text-neutral-800">
        INGRESO CLIENTES
      </h2>
      <form action="#" className="my-4">
        <label htmlFor="username" className="block font-bold">
          Username
        </label>
        <input
          type="text"
          name="username"
          required
          placeholder="Ej: ejemplo@intercarchile.cl"
          className="bg-neutral-200 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-800 border-2 border-transparent focus:border-orange-500 focus:outline-none w-10/12"
        />
        <label htmlFor="pswd" className="block font-bold">
          Contraseña
        </label>
        <input
          type="password"
          name="pswd"
          required
          placeholder="*******************"
          className="bg-neutral-200 rounded-md placeholder:text-neutral-400 text-neutral-800 focus:outline-none focus:border-orange-500 border-2 border-transparent w-10/12 "
        />
        <button
          type="submit"
          className="block mx-auto md:w-8/12 lg:w-2/6 border-2 rounded-sm my-3 hover:border-orange-500 hover:text-orange-500 font-bold"
        >
          Ingresar
        </button>
      </form>
      <Link
        to={`/olvide`}
        href="#"
        className="text-orange-300 hover:text-orange-500 underline"
      >
        Olvide mi contraseña
      </Link>
    </div>
  );
};

export default Login;
