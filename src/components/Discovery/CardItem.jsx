const CardItem = ({ id, title, description, price, handleClick }) => {
  return (
    <>
      <div
        key={id}
        className="flex flex-col justify-center text-white hover:bg-gray-100 hover:text-gray-900 py-4 px-2 bg-opacity-20 bg-black rounded-3xl shadow-md shadow-white p-2 text-center"
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-xs mt-1 truncate w-full  overflow-hidden whitespace-nowrap text-ellipsis">
          {description}
        </p>
        <div className="h-[1px] bg-gray-100 w-full px-4 mt-4" />
        <div className="w-full text-sm font-medium flex justify-between mt-1">
          <p className=" ">${price}</p>
          <p className=" ">exp: 24/07</p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
