import React from "react";
import styles from "./form.module.css";

function Form({ food, handleChange, submitForm }) {
  return (
    <div className={styles.foodForm}>
      <h6>Form Page</h6>
      <details>
      <summary>Form Summary</summary>
      <div>
        <form
          autoComplete="off"
          onSubmit={(event) => {
            submitForm(event);
          }}
        >
          <input
            name="formFoodItem"
            id="formFoodItem"
            type="text"
            placeholder="Food..."
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <br />
          <br />
          {/* <input type="text" placeholder="Where/Recipe..." /> */}
          <textarea
            name="formFoodRecipe"
            id="formFoodRecipe"
            type="text"
            placeholder="Where/Recipe..."
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <br />
          <input
            name="formFoodRecommend"
            id="formFoodRecommend"
            type="text"
            placeholder="Recommmended By..."
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <br />
          <button type="submit">Submit</button>
          <br />
        </form>
      </div>
      </details>
    </div>
  );
}
export default Form;
