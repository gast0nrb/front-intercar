const SelectOrder = () => {
    const Order = ["MAYOR PRECIO", "MENOR PRECIO"]
  return (
    <div className="ml-2 w-11/12 lg:ml-8 gap-2 my-4 font-bold">
      <p className="font-bold text-xl text-neutral-800">ORDENAR POR</p>
      <select
        name=""
        id=""
        className="text-center md:text-xs lg:text-md bg-neutral-800 text-orange-500 rounded-md lg:w-1/5 md:w-1/2 p-1"
      >
        {Order.map((a) => (
          <option>{a}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectOrder;
