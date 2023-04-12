import React from "react";
import Item from "../Item/item";

function FoodTable({ food, foodITried, deleteFood }) {
  // console.log(food);
  return (
    <div className="foodTable">
      <h6>Food Table</h6>
      {/* <p>
        food item <br />
        recipe <br />
        tried <br />
        opinion <br />
        (could roll tried and opinion into one column) <br />
        who recommend <br />
        delete from table
      </p> */}
      <table>
        <thead>
          <tr>
            <th>Food</th>
            <th>Where/Recipe?</th>
            <th>Becky Opinion</th>
            {/* <th>Tried</th> */}
            <th>Who recommends</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Food</th>
            <th>Where/Recipe?</th>
            <th>Becky Opinion</th>
            {/* <th>Tried</th> */}
            <th>Who recommends</th>
            <th>Delete</th>
          </tr>
        </tfoot>
        <tbody className="foodTableBody">
          {food.map((item, index) => {
            // console.log(item);
            // console.log(item.tried);
            // console.log(index);
            return (
              <Item
                food={item}
                foodItem={item.fooditem}
                foodRecipe={item.recipe}
                foodOpinion={item.beckyopinion}
                foodId={item.id}
                foodTried={item.tried}
                foodRecommend={item.recommendedby}
                index={index}
                key={item.id}
                removeFood={deleteFood}
                triedIt={foodITried}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
