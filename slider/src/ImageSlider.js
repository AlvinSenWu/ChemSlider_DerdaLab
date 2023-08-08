import React, { useState} from "react";
import "./styles/imageslider.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  // sliding back
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // sliding forward
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  

  // dont need this anymore, maybe need in future?
  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };
  
  // const slideStylesWidthBackground = {
  //   backgroundImage: `url(${slides[currentIndex].url})`,
  // };

  const handleChange = (e) => {
    const usr = Number(e.target.value);
    if (e.target.value === "") {
      setCurrentIndex();
    } else if (usr<1) {
      setCurrentIndex(0);
    } else if (usr>slides.length) {
      setCurrentIndex(slides.length-1);
    } else {
      setCurrentIndex(usr-1);
    }
  }


  return (
    <div className="imageSlider">
      <div>
        <div onClick={goToPrevious} className="left-arrow">
          ❰
        </div>
        <div onClick={goToNext} className="right-arrow">
          ❱
        </div>
      </div>
      <div className="slider">
        {/* <div className="slide" style={slideStylesWidthBackground}></div> */}
        <img className="slide" src={slides[currentIndex]?.url} alt="" />
        <div className="slide-title">{slides[currentIndex]?.title}</div>
        <div className="page-container">
          <input 
            className="page-input"
            maxLength={5}
            type="number"
            value={currentIndex+1}
            onChange={(e) => handleChange(e)}
          />/{slides.length}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
