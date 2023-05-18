// import React from "react";
import "./item.css";

import React, {useState} from "react"
import {getAuth, onAuthStateChanged} from "firebase/auth"

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
  becky
}) {
  // console.log(foodItem);
  console.log({becky})

  /////////// auth in item to stop passing to each item
//   const [isBecky, setIsBecky] = useState(false)
// console.log({isBecky})

// const auth = getAuth()    
// onAuthStateChanged(auth, (user)=>{
//   console.log({user})
//   // console.log(user.uid)
//         // console.log(user.uid)
//         if(user === null){
//           console.log("this user isnt becky")
//           setIsBecky(false)
//         } else if (user.uid === "QKMfrQjVekU1HqN4VUlnSyR44ks2"){
//           console.log("this user is Becky")
//           setIsBecky(true)
//         }
//     })

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
      {/* {
        isBecky === false ?
        <td>
          <input
          type="checkbox"
          // onChange={() => {
          //   triedIt(food);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          checked={foodTried}
          // disabled
          readOnly
        />
        </td>
        :<td>
          <input
          type="checkbox"
          onChange={() => {
            triedIt(food);
          }}
          checked={foodTried}
          readOnly
        />
        </td>
      } */}
      {/* remove the opinion button and only have those displayed to me*/}
      {
        becky === false ?
        <td>
        <input
          type="checkbox"
          // onChange={() => {
          //   triedIt(food);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          checked={foodTried}
          readOnly
        />
        <br />
        <button
          name="😋"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          readOnly
        >
          Yes
        </button>
        <button
          name="🤫"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          readOnly
        >
          Alright
        </button>
        <button
          name="🤮"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          readOnly
        >
          No
        </button>
        {/* comment this one out once done */}
        <button
          name="🤷‍♀️"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          readOnly
        >
          Reset
        </button>
        <p>{foodOpinion}</p>
      </td>
        :
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
      }
      {/*
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
        {/* comment this one out once done 
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
        */}
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
