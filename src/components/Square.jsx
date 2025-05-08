const Square = ({ value, onSquareClick }) => {
  return (
    <div>
      <button
        onClick={onSquareClick}
        className="bg-white border text-[#0984e3] border-gray-500 rounded-lg w-20 h-20 leading-9 m-1 text-4xl font-extrabold"
      >
        {value}
      </button>
    </div>
  );
};

export default Square;
