import React from "react";

import "./primary-btn.styles.scss";
const PrimaryBtn = ({ children }) => {
  return (
    <div className="primary-btn-component">
      <button>{children}</button>
    </div>
  );
};

export default PrimaryBtn;
