import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap";
import{ AiOutlineRight }from 'react-icons/ai'

const Features = () => {
  const sliderRef = useRef(null);

  const CustomPrevArrow = (props) => (
    <div className="custom-arrow custom-prev-arrow" onClick={props.onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className="custom-arrow custom-next-arrow" onClick={props.onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );




  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed:2000,
  };
  const images = [
    { src: "https://www.keralatourism.org/images/homecontentimage/kuttikkanam.jpg", description: "Kuttikanam is among the best trekking and adventure sport locations in Idukki",name:"Kuttikanam" },
     { src: "https://www.keralatourism.org/images/homecontentimage/meenmutty.jpg", description: "An interesting 2 km jungle trek will lead to the largest and most spectacular waterfall in Wayanad",name:"Meenmutty Waterfalls"},
     {src:"https://www.keralatourism.org/images/homecontentimage/napier.jpg",description:"The museum was named after the former Madras Governor General, John Napier.",name:"Napier Museum"},
     {src:"https://www.keralatourism.org/images/homecontentimage/kappil.jpg",description:"The pristine Kappil Beach and backwaters is situated 7 km away from Varkala." ,name:"Kappil Beach and Backwaters"},
     {src:"https://www.keralatourism.org/images/homecontentimage/vattayappam1.jpg",description:"One of the healthiest traditional teatime snacks in Kerala, Vattayappam is both gentle on the digestive system and a treat to the taste buds.",name:"Vattayappam"},
     {src:"https://www.keralatourism.org/images/homecontentimage/shangumugham_beach.jpg",description:"Shankhumugham beach is situated in Thiruvananthapuram district, Kerala and is the perfect choice for watching sunset.",name:"Shankhumugham Beach"},
    
    
   
    
    
  ];

 
  return (
    <div className="slidee" style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <h2>Experience Kerala  </h2>
    <Slider ref={sliderRef} {...settings}>
        {images.map((imag, index) => (
          <div key={index} className="carousel-slide">
            <img src={imag.src} alt={`Imag ${index + 1}`} />
            <div className="carousel-slide-content">
              {/* Move the h4 tag inside the carousel-slide-content div */}
              <h4>{imag.name}</h4>
              <div className="imag-description">{imag.description}</div>
            </div>
          </div>
        ))}
      </Slider>
    <div className="carousel-indicators1">
      {/* Left slider indicator button */}
      <div
        className="slider-indicator-left"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      {/* Right slider indicator button */}
      <div
        className="slider-indicator-right"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>

    <Button className="cta2">FIND MORE EXPERIENCES <AiOutlineRight/></Button>
  </div>
  );
};

export default Features