import React from "react";

function Item({ foodItem, foodRecipe, foodOpinion, foodTried, foodRecommend }) {
  // console.log(foodItem);
  return (
    <tr>
      <td>
        <p>{foodItem}</p>
      </td>
      <td>
        <p>{foodRecipe}</p>
      </td>
      <td>
        <p>{foodOpinion}</p>
      </td>
      {/* <td>
        <p>{foodTried}</p>
      </td> */}
      <td>
        <p>{foodRecommend}</p>
      </td>
      <td>
        <p>trash</p>
      </td>
    </tr>
  );
}
export default Item;
