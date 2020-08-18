import React from "react";
import ImageGrid from "../ImageGrid";

const Main = ({ updateScore }) => {
  return (
    <>
      <div className="flex-fill ">
        <div className="col12">
          <div className="jumbotron text-center m-0 bg-transparent">
            <div className="container">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </div>

            <p className="lead">
              Click on an image to earn points, but don't click on any more than
              once!
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="container my-4">
            <ImageGrid updateScore={updateScore} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
