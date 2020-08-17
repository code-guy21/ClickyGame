import React from "react";

import ImageGrid from "../ImageGrid";

const Main = () => {
  return (
    <div className="flex-fill">
      <div className="col12">
        <div className="jumbotron text-center m-0">
          <h1 className="display-4">Clicky Game!</h1>
          <p className="lead">
            Click on an image to earn points, but don't click on any more than
            once!
          </p>
        </div>
      </div>
      <div className="col-12">
        <div className="container">
          <ImageGrid />
        </div>
      </div>
    </div>
  );
};

export default Main;
