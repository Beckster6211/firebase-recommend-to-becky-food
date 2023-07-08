// import React from "react";
import "./item.css";

import React, {useState} from "react"
import {getAuth, onAuthStateChanged} from "firebase/auth"

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Stack from 'react-bootstrap/Stack'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form"

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
      {/* <Card className="border border-dark m-1"> */}
      <td>
        <Container fluid className="border border-dark" style={{height:"100%"}}>
        <p>{foodItem}</p>
        <textarea
          defaultValue={foodRecipe}
          style={{width:"80%"}}
          // rows="3"
          // cols="6"
          // max-width="95%"
          readOnly
        ></textarea>
        </Container>
      </td>
      {/* </Card> */}
      {/* <td>
        <textarea
          defaultValue={foodRecipe}
          rows="4"
          cols="5"
          readOnly
        ></textarea>
      </td> */}
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
          {/* <Container fluid className="border border-dark" 
          // style={{display:"flex", flexDirection:"column"}}
          > */}
            <Stack gap={2} 
            className="border border-info d-flex align-items-center" 
            // style={{width:"100%"}}
            // style={{display: "flex", alignItems:"center"}}
            >
              <Form.Check 
              type="checkbox" 
              // checked={foodTried}
              
              className="border border-dark border-2 rounded-circle px-1 bg-dark-subtle"
              style={{fontSize:"1.3em"}}
              >
              </Form.Check>
              {/* /////////// */}
          {/* <input
          type="checkbox"
          // onChange={() => {
          //   triedIt(food);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          checked={foodTried}
          readOnly
         className="foodCheckbox"
         style={{}}
        />              */}
        {/* <ButtonGroup vertical className="border border-dark" style={{}}> */}
          <Button variant="success"
          className="" 
          style={{width:"80%", 
          // alignContent:"center"
        }}
          >
            Yes
          </Button>
          <Button variant="secondary" 
          className=""
          style={{width:"80%", alignContent:"center"}}
          >
            Alright
          </Button>
          <Button variant="danger"
          className=""
          style={{width:"80%", alignContent:"center"}}
          >
          No
          </Button>
        {/* </ButtonGroup> */}
        <p>{foodOpinion}</p>
          {/* <br/> */}
        {/* <Button variant="info">
        Reset
        </Button> */}
        {/* <br/> */}
        {/* ////////////////////// */}
        {/* <br/> */}
        {/* <button
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
        </button> */}
        {/* <button
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
        </button> */}
        {/* <button
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
        </button> */}
        {/* comment this one out once done */}
        {/* <button
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
        </button> */}
        {/* <p>{foodOpinion}</p> */}
        </Stack>
        <br/>
        <Button variant="info">
        Reset
        </Button>
        {/* </Container> */}
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
