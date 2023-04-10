import React, { useState, useEffect } from "react";
import FoodTable from "./Table/table";
import { db } from "../../firebase";
import {
  query,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";

function Food() {
  const [food, setNewFood] = useState([]);
  console.log({ food });

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

  // delete
  //  const deleteTodo = async (id) => {
  //   await deleteDoc(doc(db, "todo", id));
  // };

  return (
    <div className="foodPage">
      <div>
        <h3>Recommend to Becky</h3>
        <h4>Food Page</h4>
      </div>
      <div>
        <FoodTable food={food} deleteFood={deleteFood} />
      </div>
    </div>
  );
}

export default Food;
