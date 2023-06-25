import React from "react";

const RowSystem = ({ children, className, styles }) => {
  return (
    <div className={"d-flex flex-row " + className} style={styles}>
      {children}
    </div>
  );
};

export default RowSystem;
