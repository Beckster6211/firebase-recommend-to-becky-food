import React from "react";
import Item from "../Item/item";
import "./table.css";

import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"

function FoodTable({userBecky, food, foodITried, handleOpinion, deleteFood }) {
  // console.log(food);
  return (
    <Container 
    fluid 
    className="foodTableComponent p-0"
    // style={{height:"55vw"}}
    >
      {/* <Container fluid className="border rounded p-1"> */}
      <Table 
      striped 
      bordered 
      hover 
      className="foodTable border border-dark border-4 table-fixed"
      // style={{width:""}}
      >
      <thead 
      className="tableHead bg-dark-subtle "
      style={{
        verticalAlign:"middle", 
        fontSize:"2vw", 
        fontWeight:"500"
      }}
      >
          <tr>
            <th 
            className="tableHeader"
            // style={{fontWeight:"500"}}
            >Food</th>
            {/* <th className="tableHeader">Where/Recipe?</th> */}
            <th 
            className="tableHeader"
            // style={{fontWeight:"500"}}
            >Becky Opinion</th>
            {/* <th>Tried</th> */}
            <th 
            className="tableHeader"
            // style={{fontWeight:"500"}}
            >Who recommends</th>
            <th 
            className="tableHeader"
            // style={{fontWeight:"500"}}
            >Delete</th>
          </tr>
        </thead>
        <tfoot 
        className="tableFoot bg-dark-subtle "
        style={{
          verticalAlign:"middle", 
          fontSize:"2vw", 
          fontWeight:"500"
          }}>
          <tr>
            <th>Food</th>
            {/* <th>Where/Recipe?</th> */}
            <th>Becky Opinion</th>
            {/* <th>Tried</th> */}
            <th>Who recommends</th>
            <th>Delete</th>
          </tr>
        </tfoot>
        <tbody 
        className="foodTableBody"
        style={{
          fontSize:"1.7vw", 
          // verticalAlign:""
        }}
        >
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
      {/* </Container> */}
      {/* /////////////////////// */}
      {/* <details>
      <table className="foodTable">
        <thead className="tableHead"
        
        >
          <tr>
            <th className="tableHeader"
            
            >Food</th>
            <th className="tableHeader">Where/Recipe?</th>
            <th className="tableHeader">Becky Opinion</th> */}
            {/* <th>Tried</th> */}
            {/* <th className="tableHeader">Who recommends</th>
            <th className="tableHeader">Delete</th>
          </tr>
        </thead>
        <tfoot className="tableFoot">
          <tr>
            <th>Food</th>
            <th>Where/Recipe?</th>
            <th>Becky Opinion</th> */}
            {/* <th>Tried</th> */}
            {/* <th>Who recommends</th>
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
      </details> */}
      {/* /////////////////////// */}
    </Container>
  );
}

export default FoodTable;
