import React from "react";

function Form({ food, handleSubmit }) {
  return (
    <div>
      <h6>Form Page</h6>
      <div>
        <form
          autoComplete="off"
          //   onSubmit={(event) => {
          //     handleSubmit(event);
          //   }}
        >
          <input name="formFoodItem" type="text" placeholder="Food..." />
          <br />
          <br />
          {/* <input type="text" placeholder="Where/Recipe..." /> */}
          <textarea type="text" placeholder="Where/Recipe..." />
          <br />
          <input type="text" placeholder="Recommmended By..." />
          <br />
          <button
            type="submit"
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            Submit
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
export default Form;
