import React from "react";

export default function Direction() {
  return (
    <>
     <h1>Flex-direction</h1>
      <form>
        <label>
          <input
            type="radio"
            name="direction"
            value="row"
            className="direction"
          ></input>
          row
        </label>
        <label>
          <input
            type="radio"
            name="direction"
            value="row-reverse"
            className="direction"
          ></input>
          row-reverse
        </label>
        <label>
          <input
            type="radio"
            name="direction"
            value="column"
            className="direction"
          ></input>
          column
        </label>
        <label>
          <input
            type="radio"
            name="direction"
            value="column-reverse"
            className="direction"
          ></input>
          column-reverse
        </label>
      </form>
    </>
  );
}
