import React from "react";
import Images from "../utils/Images";

const ImageGrid = () => {
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
                  style={{ height: "230px" }}
                >
                  <button
                    className="btn w-100"
                    style={{
                      height: "100%",
                      backgroundImage: `url(${col.url})`,
                      backgroundSize: "cover",
                    }}
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
