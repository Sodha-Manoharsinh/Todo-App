import React from "react";

const UpperNav = () => {
  return (
    <div className="upper-nav">
      <div className="upper-nav-text">Todo App</div>
      <div className="upper-nav-box">
        <div className="color-selector-container">
          <input type="color" className="color-selector" />
        </div>
        <button className="btn">History</button>
      </div>
    </div>
  );
};

export default UpperNav;
