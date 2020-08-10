import React from "react";

export default function Boxes() {
  return (
    <div className="container-justify flex" id="container-justify">
      <div className="box" id="b1">
        <h2>1</h2>
        <input
          type="number"
          placeholder="width"
          min="100"
          step="10"
          className="cWidth  b1"
        ></input>
        <input
          type="number"
          min="100"
          placeholder="height"
          step="10"
          className="cHeigth  b1"
        ></input>
      </div>
      <div className="box" id="b2">
        <h2>2</h2>
        <input
          type="number"
          min="100"
          placeholder="width"
          step="10"
          className="cWidth  b2"
        ></input>
        <input
          type="number"
          min="100"
          placeholder="height"
          step="10"
          className="cHeigth  b2"
        ></input>
      </div>
      <div className="box" id="b3">
        <h2>3</h2>
        <input
          type="number"
          min="100"
          placeholder="width"
          step="10"
          className="cWidth  b3"
        ></input>
        <input
          type="number"
          min="100"
          placeholder="height"
          step="10"
          className="cHeigth  b3"
        ></input>
      </div>
      <div className="box" id="b4">
        <h2>4</h2>
        <input
          placeholder="width"
          type="number"
          min="100"
          step="10"
          className="cWidth  b4"
        ></input>
        <input
          type="number"
          min="100"
          placeholder="height"
          step="10"
          className="cHeigth  b4"
        ></input>
      </div>
      <div className="box" id="b5">
        <h2>5</h2>
        <input
          type="number"
          placeholder="width"
          min="100"
          step="10"
          className="cWidth  b5"
        ></input>
        <input
          type="number"
          min="100"
          placeholder="height"
          step="10"
          className="cHeigth  b5"
        ></input>
      </div>
      <div className="box" id="b6">
        <h2>6</h2>
        <input
          type="number"
          placeholder="width"
          min="100"
          step="10"
          className="cWidth  b6"
        ></input>
        <input
          type="number"
          min="100"
          placeholder="height"
          step="10"
          className="cHeigth  b6"
        ></input>
      </div>
    </div>
  );
}
