// CSS
import "./VideoBanner.css";

const VideoBanner = ({ video1, title }) => {
  return (
    <div className="relative -z-50">
      {/* Video */}
      <video
        className="w-full"
        autoPlay
        loop
        muted
        playsInline
        src={video1}
      ></video>

      <div className=" absolute md:bottom-12 bottom-5 w-full">
        <div className="">
          <h2 className="mb-5 text-2xl text-white text-center">{title}</h2>

          <div className="flex justify-center items-center">
            <button className="py-2 px-7 bg-pink-400 rounded-full border-[1px] transition bg-transparent text-white bg-blend-normal border-white">
              Discover the collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
