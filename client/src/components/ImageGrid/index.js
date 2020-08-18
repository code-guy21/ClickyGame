import React from "react";
import Images from "../utils/Images";

const ImageGrid = ({ updateScore }) => {
  return (
    <>
      {Images.shuffle().map((row, i) => {
        return (
          <div key={i} className="row">
            {row.map((col, i) => {
              return (
                <div
                  key={i}
                  className=" col-md-4 p-2"
                  style={{ height: "250px" }}
                >
                  <button
                    className="btn w-100"
                    style={{
                      height: "100%",
                      backgroundImage: `url(${col.url})  `,
                      backgroundSize: "cover",
                      border: "0px",
                    }}
                    onClick={() => updateScore(col.id)}
                  ></button>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default ImageGrid;
