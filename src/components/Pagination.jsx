import Page from "./Page";

const Pagination = ({ pages }) => {
  const displayItems = (q) => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      //FIX WHEN IT'S 1 or less
      if (pages > 4 && i >= 4) {
        arr.push(<Page number={pages} />);
      } else if (pages > 4 && i >= 3) {
        arr.push(<Page number={pages - 1} />);
      } else {
        arr.push(<Page number={i + 1} />);
      }
    }
    return arr;
  };

  return (
  <>
<div className="paginationx mb-10 flex justify-center">
        <div className="">
          <button className="w-10 text-neutral-300 bg-neutral-800 rounded-xl m-2 hover:text-orange-500">
            &#60;
          </button>
        </div>
          {displayItems(pages)}
        <div>
          <button className="w-10 text-neutral-300 bg-neutral-800 rounded-xl m-2 hover:text-orange-500">
            &#62;
          </button>
        </div>
      </div>
  </>
    );
};

export default Pagination
