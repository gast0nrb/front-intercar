import { Link } from "react-router-dom";

const QuienesItem = ({
  busqueda,
  title = "DEFAULT TITLE",
  srcImgActive,
  srcImgInactive,
  text = "DEFAULT TEXT DEFAULT DEFAULT DEFAULT DEFAULT DEFAULT DEFAULT",
  textButton = "Ver",
  isLink = true,
}) => {
  return (
    <div className="md:w-5/12 grow lg:w-3/12 shadow-md text-center mx-2 group rounded-md my-3 border-2">
      <div className="flex grow justify-center border-b-2 md:border-b-orange-500 border-b-orange-300 border-orange-500 bg-neutral-800 rounded-sm">
        <h3 className="text-neutral-300 font-extrabold text-xs">{title}</h3>
      </div>
      <p className="text-neutral-700 text-xs">{text}</p>
      {isLink ? (
        <Link
          to={`/busqueda/${busqueda}`}
          className="hover:border-orange-500 duration-300 font-semibold text-xs hover:text-orange-500 text-neutral-500  border-neutral-300 border-2 rounded-sm px-2"
        >
          {textButton}
        </Link>
      ) : (
        <a
          href={`#${busqueda}`}
          className="hover:border-orange-500 duration-300  px-1 font-semibold text-xs hover:text-orange-500 text-neutral-500 border-neutral-300 border-2 rounded-sm"
        >
          {textButton}
        </a>
      )}
    </div>
  );
};

export default QuienesItem;
