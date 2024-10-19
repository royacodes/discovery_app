const PlanetCardItem = ({ id, title, level, imageSrc, handleClick }) => {
  return (
    <>
      <div
        key={id}
        className="flex flex-col justify-center text-white hover:bg-gray-100 hover:text-gray-900 py-4 px-2 bg-opacity-20 bg-black rounded-3xl shadow-sm shadow-white text-center"
      >
        <img src={imageSrc} />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-xs mt-1 truncate w-full  overflow-hidden whitespace-nowrap text-ellipsis">
          {level}
        </p>
      </div>
    </>
  );
};

export default PlanetCardItem;
