import React from "react";
import faker from "faker";
import "../styles/index.css";

const MainContent = (props) => {
  //TODO: Refactor the semantic code over to Bootstrap 5 and yield the same results.
  return (
    <div className="center container">
      <div className="main-content container">
        <img className="ui small left floated image" src={faker.image.city()} />
        <p>{props.para1}</p>
        <img
          className="ui small right floated image"
          src={faker.image.nature()}
        />
        <p>{props.para2}</p>
        <p>{props.para3}</p>
      </div>
    </div>
  );
};

export default MainContent;
