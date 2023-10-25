const ServiceDetails = ({ image, title, details }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>

      {/* Details */}
      <div className="space-y-5">
        <div className="mt-5 font-thin">
          <h2>{title}</h2>
        </div>
        <div className="text-[13px] font-extralight text-gray-600">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
