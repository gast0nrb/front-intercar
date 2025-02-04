import Page from "./Page";
import { useState } from "react";

const Pagination = ({ pages, page, setPage}) => {
  console.log(pages)
  function returnPages(){
    const options = []
    for (let i = 0; pages >= i; i++){
      options.push(i+1)
    }
    return options
  }
  return (
    <div className="w-full mb-5">
      <h3 className="text-center font-bold">Selecciona una página</h3>
      <select className="font-medium border-b-2 border-orange-500 px-2 rounded-sm block mx-auto text-center shadow-md bg-gray-200"
        value={page}
        onChange={(e)=> setPage(e.target.value)}
      >
      {
         returnPages().map((option)=> <option className="" value={option}>{option}</option>) 
      }
    </select>
    </div>
  );
};

export default Pagination;
