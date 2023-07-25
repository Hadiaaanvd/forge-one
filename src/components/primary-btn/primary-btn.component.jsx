import React from "react";

import "./primary-btn.styles.scss";
const PrimaryBtn = ({ children, ...props }) => {
  return (
    <div className="primary-btn-component">
      <button {...props}>{children}</button>
    </div>
  );
};

export default PrimaryBtn;
