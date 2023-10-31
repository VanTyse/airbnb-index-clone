import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import useScroll from "./custom_hooks/useScroll";

function App() {
  useScroll();
  return (
    <>
      <Header />
      <div className="max-w-[1375px] w-[95%] h-[1000px] mx-auto"></div>
    </>
  );
}

export default App;
