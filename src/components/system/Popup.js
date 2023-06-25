import React from "react";

const PopupSystem = ({ isOpened, onCloseHandler, children }) => {
  return (
    <div
      className={`popup_system ${isOpened ? "active" : ""}`}
      onClick={(e) => onCloseHandler && onCloseHandler(e)}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='container-sm bg-light rounded'
        style={{ height: "70vh" }}
      >
        {children}
      </div>
    </div>
  );
};

export default PopupSystem;
