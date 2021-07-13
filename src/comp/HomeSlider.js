import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import land from "../img/Landing.png";
const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
};
const HomeSlider = () => {
  return (
    <div className="testimonial" style={{ display: "flex" }}>
      <div style={{ width: "30%", margin: "250px 200px" }}>
        <Slider dots {...settings}>
          <Card1 />
          <Card2 />
          <Card3 />
        </Slider>
      </div>
      <div style={{ width: "30%", margin: "250px 200px" }}>
        <img src={land} alt="landing" className="landing_img  " />
      </div>
    </div>
  );
};

const Card1 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        className="home_h1"
        style={{
          fontFamily: "Poppins",
          maxWidth: "500px",
          color: " #F1F1F1",
          fontSize: "50px",
        }}
      >
        Open a Stock<span>Pe</span> Learning Account
      </h1>
      <p
        style={{
          marginTop: "20px",
          maxWidth: "500px",
          fontSize: "30px",
          fontFamily: "Poppins",

          color: "rgba(51, 230, 246, 0.49)",
        }}
      >
        Instantly buy or sell stock token with just a click of a button.
      </p>
    </div>
  );
};

const Card2 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        className="home_h1"
        style={{
          maxWidth: "500px",
          color: " #F1F1F1",
          fontFamily: "Poppins",
          fontSize: "50px",
        }}
      >
        Learn Stock Trading and <span> Invest </span> like a Pro
      </h1>
      <p
        style={{
          marginTop: "20px",
          maxWidth: "600px",
          fontSize: "30px",
          fontFamily: "Poppins",
          color: "rgba(51, 230, 246, 0.49)",
        }}
      >
        Learn Stock Trading and invest simultaneously by practically learning
      </p>
    </div>
  );
};

const Card3 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        className="home_h1"
        style={{
          fontFamily: "Poppins",
          maxWidth: "600px",
          color: " #F1F1F1",
          fontSize: "50px",
        }}
      >
        Learn and Compete with your <span> Peers </span>
      </h1>
      <p
        style={{
          marginTop: "20px",
          maxWidth: "500px",
          fontSize: "30px",
          fontFamily: "Poppins",
          color: "rgba(51, 230, 246, 0.49)",
        }}
      >
        Learn together with your peers, compete and get exciting returns
      </p>
    </div>
  );
};

export default HomeSlider;
