import React from "react";

const BackgroundContent = (props) => {
  return (
    <div className="container-fluid">
      <span>
        <h1 className="main-title">WHY IS TECH SO CHALLENGING?</h1>
      </span>
      {props.children}
    </div>
  );
};

export default BackgroundContent;
