import React from "react";
import faker from "faker";
import "../styles/index.css";

const MainContent = (props) => {
  //TODO: Refactor the semantic code over to Bootstrap 5 and yield the same results.
  return (
    <div className="center container">
      <div className="main-content container-fluid">
        <img
          className="img-fluid img-thumbnail float-start"
          src={faker.image.image()}
        />
        <p>{props.para1}</p>
        <img
          className="img-fluid img-thumbnail float-end"
          src={faker.image.nature()}
        />
        <p>{props.para2}</p>
        <img
          className="img-fluid img-thumbnail float-start"
          src={faker.image.nature()}
        />
        <p>{props.para3}</p>
      </div>
    </div>
  );
};
//TODO: figure out to fit all thumbnail pics within the div.

export default MainContent;
