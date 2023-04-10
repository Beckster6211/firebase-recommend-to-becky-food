import React from "react";

function Form() {
  return (
    <div>
      <h6>Form Page</h6>
      <div>
        <form autoComplete="off">
          <input type="text" placeholder="Food..." />
          <br />
          <input type="text" placeholder="Where/Recipe..." />
          <br />
          <input type="text" placeholder="Recommmended By..." />
          <br />
          <button type="submit">Submit</button>
          <br />
        </form>
      </div>
    </div>
  );
}
export default Form;
