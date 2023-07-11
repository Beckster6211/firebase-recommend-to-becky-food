import React from "react";
// import styles from "./form.module.css";

/*
css like the guy in video does about firebase todo list
const style = {
  bg: `a color`,
  container: `bg-slate-100 max-w-[500px] w-full,
  heading: `text-3xl font-bold text-center text-grey-800`
}

<div className = {style.bg}>
{style.container}
</div>
*/

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/button"

function FoodForm({ food, handleChange, submitForm }) {
  return (
    <Container fluid className="bg-warning border border-warning border-3 rounded p-1">
      {/* <h6>Form Page</h6> */}
      <Container fluid 
        className="bg-warning p-2">
        <Card 
          className ="bg-warning-subtle border border-warning-subtle" >
          <Card.Body>
          {/* <Card.Title>Food Form</Card.Title> */}

          <Form 
            className = "bg-warning-subtle p-1" 
          autoComplete="off"
          onSubmit={(event) => {
            submitForm(event);
          }}
            style={{fontSize:"1.6vw"}}
          >

            <Form.Group 
              className = ""  controlId="formFood"
            >
              {/* <Form.Label>Food</Form.Label> */}
              <FloatingLabel controlId = "formFoodItem" label= "Food...">
                <Form.Control className="text-break border border-dark border-3" type="text" placeholder = "Food..." 
                name="formFoodItem"
                // id="formFoodItem"
                // type="text"
                // placeholder="Food..."
                onChange={(event) => {
                  handleChange(event);
                }}></Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="pt-2">
              {/* <Form.Label>Recipe</Form.Label> */}
              <FloatingLabel controlId = "formFoodRecipe" label= "Recipe/Ingredients...">
                <Form.Control className="border border-dark border-3" as = "textarea" style = {{height:"110px"}} placeholder = "Recipe/Ingredients..."
                name="formFoodRecipe"
                // id="formFoodRecipe"
                // type="text"
                // placeholder="Where/Recipe..."
                onChange={(event) => {
                  handleChange(event);
                }}></Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="py-2" controlId="formFoodRecommend">
              {/* <Form.Label>Recommended By</Form.Label> */}
              <FloatingLabel controlId = "formFoodRecommend" label="Recommended By..." >
                <Form.Control className="border border-dark border-3" type="text" placeholder="Recommended By..."
                name="formFoodRecommend"
                // id="formFoodRecommend"
                // type="text"
                // placeholder="Recommmended By..."
                onChange={(event) => {
                  handleChange(event);
                }}></Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Button 
            className="border border-dark border-3 text-dark" variant = "info" type = "submit"
            style={{fontSize:"1.6vw", width:"auto"}}
            >
              Enjoy 
              </Button>

          </Form>
          </Card.Body>
        </Card>
      </Container>
      {/* <details>
      <summary>Form Summary</summary>
      <div>
        <form
          autoComplete="off"
          onSubmit={(event) => {
            submitForm(event);
          }}
        > */}
          {/* <input
            name="formFoodItem"
            id="formFoodItem"
            type="text"
            placeholder="Food..."
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <br />
          <br /> */}
          {/* <input type="text" placeholder="Where/Recipe..." /> */}
          {/* <textarea
            name="formFoodRecipe"
            id="formFoodRecipe"
            type="text"
            placeholder="Where/Recipe..."
            onChange={(event) => {
              handleChange(event);
            }}
          /> */}
          {/* <br />
          <input
            name="formFoodRecommend"
            id="formFoodRecommend"
            type="text"
            placeholder="Recommmended By..."
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <br />
          <button type="submit">Submit</button>
          <br />
        </form>
      </div>
      </details> */}
    </Container>
  );
}
export default FoodForm;
