const SelectOrder = () => {
    const Order = ["MAYOR PRECIO", "MENOR PRECIO"]
  return (
    <div className="ml-2 w-11/12 lg:ml-8 gap-2 my-4 font-bold">
      <p className="font-bold text-xl text-neutral-800">ORDENAR POR</p>
      <select
        name=""
        id=""
        className="text-center md:text-xs lg:text-md border-2 shadow-md focus:text-orange-500 rounded-sm lg:w-1/5 md:w-1/2 p-1 text-neutral-800 duration-300"
      >
        {Order.map((a, i) => (
          <option key={i} className="">{a}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectOrder;
