import React, { useState, useEffect } from "react";
import FoodTable from "./Table/table";
import Form from "./Form/form";
import { db } from "../../firebase";
import {
  query,
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

function Food() {
  const [food, setNewFood] = useState([]);
  const [form, setForm] = useState({});
  // const [foodItemInput, setFoodItemInput] = useState("");
  const [updatePage, setUpdatePage] = useState(false);
  console.log({ food });

  function handleChange(event) {
    let inputName = event.target.name;
    // console.log({ inputName });
    let vl = event.target.value;
    // console.log({ vl });
    console.log({ form });
    setForm({ ...form, [event.target.id]: event.target.value });
    console.log({ form });
  }

  async function handleSubmit(event) {
    // refreshes form, empties form inputs
    // window.location.reload();
    console.log(form);
    console.log("submit button pressed");
    event.preventDefault();
    console.log(form.formFooditem);
    await addDoc(collection(db, "Food"), {
      beckyopinion: "🤷",
      fooditem: form.formFoodItem,
      recipe: form.formFoodRecipe,
      recommendedby: form.formFoodRecommend,
      tried: false,
      // fooditem: foodItemInput,
    });
  }

  ////CRUD
  // Create/add to database
  // const createFood = async (event) => {
  //   event.preventDefault(event);
  //   await addDoc(collection(db, "Food"), {
  //     beckyopinion: "🤷",
  //     tried: false,
  //     fooditem: formFoodItem,
  //   });
  // };

  /*
  function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // create
  const createTodo = async (event) => {
    event.preventDefault(event);
    if (input === "") {
      alert("Please enter");
      return;
    }
    await addDoc(collection(db, "todo"), {
      text: input,
      completed: false,
    });
    setInput("");
  }; 
  */

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

  //////Delete/delete one
  const deleteFood = async (id) => {
    // console.log({ id });
    await deleteDoc(doc(db, "Food", id));
  };

  return (
    <div className="foodPage">
      <div>
        <h3>Recommend to Becky</h3>
        <h4>Food Page</h4>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          onChange={(event) => {
            handleChange(event);
          }}
          name="formFoodItem"
          id="formFoodItem"
          // value={foodItemInput}
          type="text"
          placeholder="Food..."
        />
        <br />
        <br />
        {/* <input type="text" placeholder="Where/Recipe..." /> */}
        <textarea
          name="formFoodRecipe"
          id="formFoodRecipe"
          onChange={(event) => {
            handleChange(event);
          }}
          type="text"
          placeholder="Where/Recipe..."
        />
        <br />
        <input
          onChange={(event) => {
            handleChange(event);
          }}
          name="formFoodRecommend"
          id="formFoodRecommend"
          type="text"
          placeholder="Recommmended By..."
        />
        <br />
        <button
          type="submit"
          // onSubmit={(event) => {
          //   handleSubmit(event);
          // }}
        >
          Submit
        </button>
        <br />
      </form>
      {/* <div>
        <Form food={food} submitForm={handleSubmit} /> 
      </div> */}
      <div>
        <FoodTable food={food} deleteFood={deleteFood} />
      </div>
    </div>
  );
}

export default Food;
