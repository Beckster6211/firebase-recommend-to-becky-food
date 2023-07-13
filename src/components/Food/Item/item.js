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
import Badge from "react-bootstrap/Badge"

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
          {/* <Container fluid 
          className="bg-light rounded p-1"
          style={{
           
          }}
          > */}
            <p 
            className="bg-light border border-dark border-2 rounded p-1"
            style={{
              fontSize:"1.6vw",
              // border:"solid black 2px"
            }}
            >{foodItem}</p>
            <Form.Control 
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={foodRecipe} 
            readOnly 
            style={{
              fontSize:"1.5vw",
              height:"10vw"          
            }}
            />
            {/* 
            ////////////
            <textarea
            defaultValue={foodRecipe}
            // rows="3"
            // cols="6"
            // max-width="95%"
            readOnly
            ></textarea> 
            ////////////
            */}
          {/* </Container> */}
      </td>
        {/*
        /////////////////////////////
         <td>
          <p>{foodItem}</p>
        <textarea
          defaultValue={foodRecipe}
          // rows="3"
          // cols="6"
          // max-width="95%"
          readOnly
        ></textarea>
        </td> 
        /////////////////////////////////////
        */}
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
        
        <td
        className="p-2 align-middle"
      style={{
      }}
        >
          {/* <Container fluid 
          className="bg-light rounded p-2"
          style={{
            
          }}
          > */}
            <input
            className="foodCheckbox"
            style={{
              width:"3vw",
              height:"3vw",
              
            }}
            type="checkbox"
            onChange = {()=>{
            console.log("not for you")
            }}
            checked={foodTried}
            readOnly
        /> 
            <Stack gap={1} 
            className="p-1"
            style={{
              // border:"solid black 3px"
            }}
            >
            {/* <ButtonGroup vertical
            className=""
            style={{
              border:"solid 2px black"
            }}
            > */}
              <Button variant="success"
              className="border border-2 border-dark rounded"
              style={{
                fontSize:"2vw"
              }}
          name="😋"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          readOnly
        >
          😋          
        </Button>
        <Button variant="secondary"
        className="border border-dark border-2 rounded"
        style={{
          fontSize:"2vw"
        }}
          name="🤫"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          readOnly
        >
          🤫
        </Button>
        <Button variant = "danger"
        className="border border-dark border-2 rounded"
        style={{
          fontSize:"2vw"
        }}
          name="🤮"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          readOnly
        >
          🤮
        </Button>
           {/* 
           //////////
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
          Yes/😋
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
          Alright/🤫
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
          No/🤮
        </button>
        /////////
        */}
        {/* </ButtonGroup> */}
        </Stack>
        <p
        className="p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          fontSize:"2.5vw",
          // border:"solid black 2px",
          // borderRadius:"4px"
        }}
        >{foodOpinion}</p>
          {/* </Container> */}
          {/* 
          //////////
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
         className="foodCheckbox"
         style={{}}
        />  
        
        <br/>
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
        ///////////
        */}
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
        {/* 
        //////////
        <p>{foodOpinion}</p> 
        /////////
        */}
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
      <td
      className="p-2 align-middle"
      style={{
      }}
      >
        {/* <Container fluid 
          className="bg-light rounded p-1"
          style={{
            
          }}
          > */}
        <p
        className="p-1 bg-light border border-dark border-2 rounded"
        style={{
          fontSize:"1.6vw"
        }}
        >{foodRecommend}</p>
        {/* </Container> */}
      </td>


      <td
      className="p-2 align-middle"
      style={{
      }}
      >
        {/* <Container fluid 
          className="bg-light rounded p-1"
          style={{
            
          }}
          > */}
          <Button variant="light"
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
        {/* 
        /////////
        <button
          onClick={() => {
            // console.log("delete button clicked");
            removeFood(foodId);
          }}
        >
          🗑️
        </button> 
        /////////
        */}
        {/* </Container> */}
      </td>
    </tr>
  );
}
export default Item;
