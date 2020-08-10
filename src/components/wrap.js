import React from "react";

export default function Wrap() {
  return (
    <>
     <h1>Flex-wrap</h1>
      <form>
        <label>
          <input
            type="radio"
            name="wrap"
            value="wrap"
            className="wrap"
          ></input>
          Wrap
        </label>
        <label>
          <input
            type="radio"
            name="wrap"
            value="no-wrap"
            className="wrap"
          ></input>
          no-wrap
        </label>
        <label>
          <input
            type="radio"
            name="wrap"
            value="wrap-reverse"
            className="wrap"
          ></input>
          wrap-reverse
        </label>
      </form>
    </>
  );
}
