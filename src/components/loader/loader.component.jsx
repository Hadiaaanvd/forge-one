import React from "react";

import "./loader.styles.scss";

const Loader = ({ size, borderSize, margin }) => {
  return (
    <div
      className="loader-component"
      style={{
        width: size,
        height: size,
        borderWidth: borderSize,
        margin: margin,
      }}
    ></div>
  );
};

export default Loader;
