import React from "react";

const NavBar = ({ score, topScore }) => {
  return (
    <>
      <nav
        style={{ fontSize: "25px" }}
        className="custom-nav navbar navbar-light text-light bg-dark fixed-top p-3 "
      >
        <div className="col-md-4 text-center">Clicky Game</div>
        <div className="col-md-4 text-center">Click an image to begin!</div>
        <div className="col-md-4 text-center">
          Score: {score} | Top Score: {topScore}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
