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
  changeOpinion,
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
          name="😋"
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          Yes
        </button>
        <button
          name="🤫"
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          Alright
        </button>
        <button
          name="🤮"
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          No
        </button>
        {/* comment this one out once done */}
        <button
          name="🤷‍♀️"
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          Reset
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
