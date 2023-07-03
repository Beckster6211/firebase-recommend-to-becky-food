import React from "react";
import Item from "../Item/item";
import "./table.css";

import Table from 'react-bootstrap/Table';

function FoodTable({userBecky, food, foodITried, handleOpinion, deleteFood }) {
  // console.log(food);
  return (
    <div className="foodTableComponent">
      {/* <h6>Food Table</h6> */}
      {/* <p>
        food item <br />
        recipe <br />
        tried <br />
        opinion <br />
        (could roll tried and opinion into one column) <br />
        who recommend <br />
        delete from table
      </p> */}
      <Table striped bordered hover className="foodTable border border-dark border-3 rounded text-wrap">
      <thead className="tableHead bg-danger text-center">
          <tr>
            <th className="tableHeader">Food</th>
            <th className="tableHeader">Where/Recipe?</th>
            <th className="tableHeader">Becky Opinion</th>
            {/* <th>Tried</th> */}
            <th className="tableHeader">Who recommends</th>
            <th className="tableHeader">Delete</th>
          </tr>
        </thead>
        <tfoot className="tableFoot">
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
                changeOpinion={handleOpinion}
                becky={userBecky}
              />
            );
          })}
        </tbody>
      </Table>
      <details>
      <table className="foodTable">
        <thead className="tableHead">
          <tr>
            <th className="tableHeader">Food</th>
            <th className="tableHeader">Where/Recipe?</th>
            <th className="tableHeader">Becky Opinion</th>
            {/* <th>Tried</th> */}
            <th className="tableHeader">Who recommends</th>
            <th className="tableHeader">Delete</th>
          </tr>
        </thead>
        <tfoot className="tableFoot">
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
                changeOpinion={handleOpinion}
                becky={userBecky}
              />
            );
          })}
        </tbody>
      </table>
      </details>
    </div>
  );
}

export default FoodTable;
