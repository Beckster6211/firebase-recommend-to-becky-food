import React from "react";

function Item({
  food,
  foodItem,
  foodRecipe,
  foodOpinion,
  foodTried,
  foodRecommend,
  removeFood,
  foodId,
  triedIt,
}) {
  // console.log(foodItem);
  return (
    <tr>
      <td>
        <p>{foodItem}</p>
      </td>
      <td>
        <textarea
          defaultValue={foodRecipe}
          rows="4"
          cols="5"
          readOnly
        ></textarea>
      </td>
      {/* <td>
        <p>{foodRecipe}</p>
      </td> */}
      <td>
        <input
          type="checkbox"
          onChange={() => {
            triedIt(food);
          }}
          checked={foodTried}
          // readOnly
        />
        <br />
        <button
          name="yesButton"
          onClick={() => {
            console.log("Yes Button");
          }}
        >
          Yes
        </button>
        <button
          name="alrightButton"
          onClick={() => {
            console.log("Alright Button");
          }}
        >
          Alright
        </button>
        <button
          name="noButton"
          onClick={() => {
            console.log("No Button");
          }}
        >
          No
        </button>
        <p>{foodOpinion}</p>
      </td>
      {/* <td>
        <p>{foodTried}</p>
      </td> */}
      <td>
        <p>{foodRecommend}</p>
      </td>
      <td>
        <button
          onClick={() => {
            // console.log("delete button clicked");
            removeFood(foodId);
          }}
        >
          🗑️
        </button>
      </td>
    </tr>
  );
}
export default Item;
