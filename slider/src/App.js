import './App.css';
import ImageSlider from "./ImageSlider"
import "./styles/container.css";
import { getSlides } from "./slidesData"; // Import the slides images

const App = () => {
  const containerStyles = {
    width: "800px",
    height: "600px",
    margin: "0 auto",
  };

  const slides = getSlides()

  return (
    <div>
      <h1>Chem Slider V1</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
