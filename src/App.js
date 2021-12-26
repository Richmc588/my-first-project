import React from "react";
import MainContent from "./components/MainContent";
import "./styles/index.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import BackgroundContent from "./components/BackgroundContent";
import Footer from "./components/Footer";
import List from "./components/Data";

const App = () => {
  document.body.style.backgroundColor = "black";
  // TODO: Create a data file and move all of the text over to a list, and create a function
  // to map over the list, then pass down as props to the child components.
  return (
    <div>
      <div className="banner-body">
        <h1>
          <Banner />
        </h1>
      </div>
      <NavBar />
      <div className="">
        <BackgroundContent className="">
          <div className="">
            <MainContent
              //TODO
              //Fix this shit code !!!!
              para1={List()}
              para2={List()}
              para3={List()}
            />
          </div>
        </BackgroundContent>
      </div>
      <Footer />
    </div>
  );
};

export default App;
