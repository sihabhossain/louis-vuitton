const ImageBanner = ({ image, title, button2 }) => {
  return (
    <div className="relative -z-50">
      {/* image */}
      <img className="w-full" src={image} alt="" />

      <div
        className={`absolute md:bottom-12 ${
          button2 ? "text-center w-full -mx-10" : "text-center w-full "
        } `}
      >
        <div className="">
          <h2 className="mb-5 text-2xl text-white text-center">{title}</h2>
          <div className="gap-5 md:flex justify-center items-center">
            <div>
              <button className="py-2 px-7 bg-pink-400 rounded-full border-[1px] transition bg-transparent text-white bg-blend-normal border-white">
                Discover the collection
              </button>
            </div>
            {button2 ? (
              <div>
                <button className="py-2 px-7 bg-pink-400 rounded-full border-[1px] transition bg-transparent text-white bg-blend-normal border-white">
                  {button2}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
