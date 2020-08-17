import React from "react";

const NavBar = ({ score, topScore }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light ">
        <div className="col-md-4 text-center">
          <a className="navbar-brand" href="/">
            Clicky Game
          </a>
        </div>
        <div className="col-md-4 text-center">Click an image to begin!</div>
        <div className="col-md-4 text-center">
          Score: {score} | Top Score: {topScore}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
