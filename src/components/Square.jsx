import {React, useState} from "react";


const Square = () => {
    const [value, setValue] = useState(null)
  function handleClick() {
    setValue('X')
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-white border border-gray-400 w-12 h-12 leading-9 m-1 text-lg"
      >
        {value}
      </button>
    </div>
  );
};

export default Square;
