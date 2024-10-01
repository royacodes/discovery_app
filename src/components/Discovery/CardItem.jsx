const CardItem = ({ id, title, description, price, handleClick }) => {
  return (
    <>
      <div
        key={id}
        className="bg-white shadow-lg rounded-lg border border-gray-200"
      >
        <div className="relative">
          <img
            src="src/assets/patterns/pat1.jpg"
            alt={title}
            className="w-full h-20 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-50 rounded-lg">
            <h2 className="text-white text-lg font-semibold">{title}</h2>
            <p className="text-white text-xs mt-1 truncate w-full max-w-[calc(100%-32px)] overflow-hidden whitespace-nowrap text-ellipsis">
              {description}
            </p>
            <div className="w-full max-w-[calc(100%-32px)] flex justify-between mt-1">
              <p className="text-white text-sm font-bold">${price}</p>
              <p className="text-white text-sm font-bold">exp: 24/07</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
