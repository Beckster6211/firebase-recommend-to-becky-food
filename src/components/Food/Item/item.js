import React from "react";

function Item({
  foodItem,
  foodRecipe,
  foodOpinion,
  foodTried,
  foodRecommend,
  removeFood,
  foodId,
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
        <input type="checkbox" checked={foodTried} readOnly />
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
