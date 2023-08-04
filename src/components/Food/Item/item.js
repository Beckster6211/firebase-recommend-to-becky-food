import React, {useState} from "react"
/* COULD DELETE USESTATE */
import "./item.css";

//
import {getAuth, onAuthStateChanged} from "firebase/auth"
/* COULD DELETE THIS */

//
import Button from "react-bootstrap/Button"
import Stack from 'react-bootstrap/Stack'
import Form from "react-bootstrap/Form"


//
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
  // console.log({becky})

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
      <td 
      className="p-2 align-middle"
      style={{
      }}
      >
            <p 
            className="bg-light border border-dark border-2 rounded p-1"
            style={{
              fontSize:"1.6vw",
              // border:"solid black 2px"
            }}
            >
              {foodItem}
            </p>
            <Form.Control 
            name="foodTableFoodTextarea"
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={foodRecipe} 
            readOnly 
            style={{
              fontSize:"1.5vw",
              height:"10vw"          
            }}
            />
      </td>

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
        
        <td
        className="p-2 align-middle"
      style={{
      }}
        >          
        <Stack 
        direction="horizontal"
        className="justify-content-evenly"
        >
          <input
          name="foodTableTriedCheckbox"
            className="foodCheckbox"
            style={{
              width:"3vw",
              height:"3vw",
              
            }}
            type="checkbox"
            onChange = {()=>{
              console.log("Not for you, sorry")
               }}       
            checked={foodTried}
            readOnly
        /> 
          <p
        className="p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          fontSize:"2.2vw",
          
          // border:"solid black 2px",
          // borderRadius:"4px"
        }}
        >{foodOpinion}</p>
        </Stack>
            <Stack 
            gap={1} 
            className="p-1"
            style={{
              // border:"solid black 3px"
            }}
            >
              <Button 
              variant="success"
              className="border border-2 border-dark rounded"
              style={{
                fontSize:"2vw"
              }}
          name="😋"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          😋          
        </Button>
        <Button 
        variant="secondary"
        className="border border-dark border-2 rounded"
        style={{
          fontSize:"2vw"
        }}
          name="🤫"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          🤫
        </Button>
        <Button 
        variant = "danger"
        className="border border-dark border-2 rounded"
        style={{
          fontSize:"2vw"
        }}
          name="🤮"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          🤮
        </Button>
        </Stack>
         
        {/* 
        /////////
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
        /////////
         */}
      </td>
      
        :
        <td
        className="p-2 align-middle"
      style={{
      }}
        >
          <Stack 
        direction="horizontal"
        className="justify-content-evenly"
        >
          <input
          name="foodTableBeckyTriedCheckbox"
        className="foodCheckbox"
        style={{
          width:"3vw",
          height:"3vw",
          
        }}
          type="checkbox"
          onChange={() => {
            triedIt(food);
          }}
          checked={foodTried}
          // readOnly
        />
        <p
        className="p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          fontSize:"2.2vw",
          // border:"solid black 2px",
          // borderRadius:"4px"
        }}
        >{foodOpinion}</p>
        </Stack>
        
       <Stack 
       gap={1} 
            className="p-1"
            style={{
              // border:"solid black 3px"
            }}
            >
             <Button 
             variant="success"
              className="border border-2 border-dark rounded"
              style={{
                fontSize:"2vw"
              }}
          name="😋"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        
        >
          😋          
        </Button> 
        <Button 
        variant="secondary"
        className="border border-dark border-2 rounded"
        style={{
          fontSize:"2vw"
        }}
          name="🤫"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          🤫
        </Button>
        <Button 
        variant = "danger"
        className="border border-dark border-2 rounded"
        style={{
          fontSize:"2vw"
        }}
          name="🤮"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          🤮
        </Button>
            </Stack>
        {/* comment this one out once done */}
        {/* <button
          name="🤷‍♀️"
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          Reset
        </button> */}
      </td>
      }
      {/* <td>
        <p>{foodTried}</p>
      </td> */}
      <td
      className="p-2 align-middle"
      style={{
      }}
      >
        <p
        className="p-1 bg-light border border-dark border-2 rounded"
        style={{
          fontSize:"1.6vw"
        }}
        >
          {foodRecommend}
        </p>
      </td>


      <td
      className="p-2 align-middle"
      style={{
      }}
      >
          <Button 
          variant="light"
          className="border border-dark border-2"
          style={{
            fontSize:"2.5vw"
          }}
          onClick={() => {
            // console.log("delete button clicked");
            removeFood(foodId);
          }}>
          🗑️
          </Button>
      </td>
    </tr>
  );
}
export default Item;
