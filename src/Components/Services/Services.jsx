import { serviceData } from "./Service";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  return (
    <div className="md:my-20 my-10">
      <div>
        <h2 className="text-2xl  text-center md:mx-20 mb-10">Services</h2>
      </div>

      {/* Service details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mx-20 mx-10">
        {serviceData.map((item) => (
          <ServiceDetails
            title={item.title}
            image={item.image}
            details={item.details}
            key={item.id}
          ></ServiceDetails>
        ))}
      </div>
    </div>
  );
};

export default Services;
