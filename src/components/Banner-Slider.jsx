import React, { useState, useRef, useEffect } from "react";
import sliderCss from "./components-css/Banner-Slider.module.css"; // Importing CSS module
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refreshInterval = useRef(null);

  const images = [img1, img2, img3, img4, img5];
  const lengthItems = images.length;

  // Slide-specific content
  const slideContent = [
    {
      title: "Welcome to Home Styler",
      description: "Discover the latest trends in home design and get inspired with our expertly curated ideas. From stylish decor tips to practical advice, we’re here to help you create beautiful and functional living spaces.",
    },
    {
      title: "Kitchen Design Inspiration",
      description:"Uncover a range of creative kitchen designs that balance style and practicality. From sleek modern aesthetics to cozy traditional looks, find ideas that make your kitchen a functional and inviting space.",
    },
    {
      title: "Transform Your Living Space",
      description: "Elevate your home with creative design ideas that enhance both comfort and style. Whether you’re looking to refresh a single room or overhaul your entire home, find inspiration to make your living space more functional and visually appealing.",
    },
    {
      title: "Outdoor Styling for Every Season",
      description: "Refresh your outdoor areas with versatile styling ideas suited for every time of year. From summer garden parties to cozy winter retreats, discover tips and inspiration to make your outdoor spaces beautiful and functional throughout the seasons.",
    },
    {
      title: "Cozy Bedroom Ideas",
      description: "Transform your bedroom into a tranquil sanctuary with our collection of cozy design ideas. Explore ways to incorporate soft textures, soothing colors, and functional decor to create a relaxing retreat where you can unwind and rejuvenate.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % lengthItems);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? lengthItems - 1 : prevIndex - 1
    );
  };

  const setSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    clearInterval(refreshInterval.current);
    refreshInterval.current = setInterval(nextSlide, 3000);

    return () => clearInterval(refreshInterval.current);
  }, [activeIndex]);

  return (
    <>
      <div className={sliderCss.slider}>
        <div
          className={sliderCss.list}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className={sliderCss.item}>
              <div className={sliderCss.overlay}></div> {/* Black shade overlay */}
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className={sliderCss.content}>
          <h1>{slideContent[activeIndex].title}</h1>
          <p>{slideContent[activeIndex].description}</p>
        </div>

        {/* Navigation Buttons */}
        <div className={sliderCss.buttons}>
          <button id="prev" onClick={prevSlide}>
            &lt;
          </button>
          <button id="next" onClick={nextSlide}>
            &gt;
          </button>
        </div>

        {/* Dots Navigation */}
        <ul className={sliderCss.dots}>
          {images.map((_, index) => (
            <li
              key={index}
              className={index === activeIndex ? sliderCss.active : ""}
              onClick={() => setSlide(index)}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BannerSlider;
