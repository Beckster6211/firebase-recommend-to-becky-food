import React, { useState, useEffect } from "react";
import FoodTable from "./Table/table";
import FoodForm from "./Form/form";
import "./food.css";

import Nav from "../Nav/nav";

import Accordion from 'react-bootstrap/Accordion';
import Container from "react-bootstrap/Container"


import { db } from "../../firebase";
import {
  query,
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

function Food({Becky}) {
  const [food, setNewFood] = useState([]);
  const [form, setForm] = useState({});
  // const [updatePage, setUpdatePage] = useState(false);
  console.log({ food });

  function handleChange(event) {
    // let inputName = event.target.name;
    // console.log({ inputName });
    // let vl = event.target.value;
    // console.log({ vl });
    // console.log({ form });
    setForm({ ...form, [event.target.id]: event.target.value });
    console.log({ form });
  }

  ////CRUD
  // Create/add to database
  async function handleSubmit(event) {
    // console.log(form);
    // console.log("submit button pressed");
    event.preventDefault();
    // console.log(form.formFooditem);
    await addDoc(collection(db, "Food"), {
      beckyopinion: "🤷",
      fooditem: form.formFoodItem,
      recipe: form.formFoodRecipe,
      recommendedby: form.formFoodRecommend,
      tried: false,
    });
    // refreshes form, empties form inputs
    window.location.reload();
  }

  /// Read/get all
  useEffect(() => {
    const q = query(collection(db, "Food"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let foodArray = [];
      querySnapshot.forEach((doc) => {
        foodArray.push({ ...doc.data(), id: doc.id });
      });
      setNewFood(foodArray);
      //console.log(food);
    });
    return () => unsubscribe();
  }, []);

  /////Update/change
  //update for changing tried from true to false
  // update becky opinion for when tried (disabled those buttons once works as should only be avaliable for me to alter)

  // have tried checkbox
  const haveTried = async (food) => {
    // console.log("checkbox ticked");
    // console.log(food);
    await updateDoc(doc(db, "Food", food.id), {
      tried: !food.tried,
    });
  };
  ///becky opinion

  const changeOpinion = async (food, event) => {
    // console.log("button clicked");
    // console.log(`change opinion ${food.beckyopinion} `);
    // console.log(event.target.name);
    let beckyOpinion = event.target.name;
    await updateDoc(doc(db, "Food", food.id), {
      beckyopinion: beckyOpinion,
    });
    // console.log(`becky opinion changed ${food.beckyopinion}`);
  };

  //////Delete/delete one
  const deleteFood = async (id) => {
    // console.log({ id });
    await deleteDoc(doc(db, "Food", id));
  };

  return (
    <div className="foodPage">
      <div>
        <br/>
        {/* <Nav/> */}
        {/* <h3>Recommend to Becky</h3> */}
        <h4 className = "header">FOOD PAGE</h4>
        <br/>
      </div>
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="foodAcord p-2 border border-dark border-3 rounded bg-light">
        <Accordion.Item eventKey="1" className="border border-dark border-3 rounded">
          <Accordion.Header className="">
            <Container fluid className="fs-4 text-center">
              Food Form
              {/* <h3 >Form for Food</h3> */}
              </Container>
           </Accordion.Header>
          <Accordion.Body className="">
            {/* <div> */}
              <FoodForm
              food={food}
              handleChange={handleChange}
              submitForm={handleSubmit}
            />
            {/* </div> */}
          </Accordion.Body>
        </Accordion.Item>
        <br/>
        <Accordion.Item eventKey="0" className="border border-dark border-3 rounded">
          <Accordion.Header>
            <Container fluid className="fs-4 text-center">
              Food Table
            </Container>
           {/* <h3>Food Table</h3>  */}
            </Accordion.Header>
          <Accordion.Body>
            {/* <div> */}
              <FoodTable
              userBecky={Becky}
              food={food}
              foodITried={haveTried}
              deleteFood={deleteFood}
              handleOpinion={changeOpinion}
            />
            {/* </div> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Food;
