import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ImageSlider from "./components/Sliders/ImageSlider";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const [currentHeaderHeight, setCurrentHeaderHeight] = useState(44);
  // This value is not the height in pixels. Rather it is the tailwinds height assuming you use h-44;

  return (
    <div className="text-vantyse-grey-text">
      <Header onHeightChange={(height) => setCurrentHeaderHeight(height)} />
      <div
        className={`${currentHeaderHeight === 24 ? "pt-24" : "pt-44"}`}
      ></div>

      <div className={`max-w-[1375px] w-[95%] mx-auto h-[100dvh] pt-28`}>
        <div className="mt-10 mx-auto w-fit">{/* <ImageSlider /> */}</div>
        <div className="mt-10 mx-auto w-fit">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
