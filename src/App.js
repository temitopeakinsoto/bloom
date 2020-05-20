import React from "react";
import "./App.css";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideBar />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
