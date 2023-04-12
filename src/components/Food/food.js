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
  updateDoc,
} from "firebase/firestore";

function Food() {
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

  const changeOpinion = async () => {};

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
      <div>
        <Form
          food={food}
          handleChange={handleChange}
          submitForm={handleSubmit}
        />
      </div>
      <div>
        <FoodTable food={food} foodITried={haveTried} deleteFood={deleteFood} />
      </div>
    </div>
  );
}

export default Food;
