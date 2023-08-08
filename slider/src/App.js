import './App.css';
import ImageSlider from "./ImageSlider"
import "./styles/container.css";
import { getSlides } from "./slidesData"; // Import the slides images

const App = () => {
  const containerStyles = {
    width: "100vw",
    height: "calc(100vh - 50px)",
    margin: "0 auto",
  };

  const slides = getSlides()

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <h1>Chem Slider V1</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
