import ImageBanner from "../../Components/ImageBanner/ImageBanner";
import VideoBanner from "../../Components/VideoBanner/VideoBanner";

// Videos
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";

// Images
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <VideoBanner title={"Artycapucines 2023"} video1={video1}></VideoBanner>
      <VideoBanner title={"LV Ski"} video1={video2}></VideoBanner>
      <ImageBanner
        image={image1}
        title={"Flight Mode"}
        button2={"Explore all ready-to-wear"}
      ></ImageBanner>

      <ImageBanner
        image={image2}
        title={"The New OnTheGo East West"}
      ></ImageBanner>

      <VideoBanner
        title={"Men's Fall 2023 Collection"}
        video1={video3}
      ></VideoBanner>

      <ImageBanner
        image={image3}
        title={"Louis Vuitton Blossom"}
        button2={"Discover the compaign"}
      ></ImageBanner>
      <ImageBanner
        image={image4}
        title={"Myriad"}
        button2={"Discover the compaign"}
      ></ImageBanner>

      <VideoBanner
        title={"Women's Fashion Campaign"}
        video1={video4}
      ></VideoBanner>

      {/* Services */}
      <Services></Services>
    </div>
  );
};

export default Home;
