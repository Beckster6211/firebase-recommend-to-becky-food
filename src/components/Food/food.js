import React, { useState, useEffect } from "react";
import FoodTable from "./Table/table";
import { db } from "../../firebase";
import { query, collection, onSnapshot } from "firebase/firestore";

function Food() {
  const [food, setNewFood] = useState([]);

  useEffect(() => {
    console.log(food);
    const q = query(collection(db, "Food"));
    console.log(q);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log(unsubscribe);
      let foodArray = [];
      querySnapshot.forEach((doc) => {
        foodArray.push({ ...doc.data(), id: doc.id });
      });
      console.log(foodArray);
      setNewFood(foodArray);
      console.log(food);
    });
    return () => unsubscribe();
  }, []);

  /*
  // read
  useEffect(() => {
    const q = query(collection(db, "todo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);
  */

  return (
    <div className="foodPage">
      <div>
        <h3>Recommend to Becky</h3>
        <h4>Food Page</h4>
      </div>
      <div>
        <FoodTable food={food} />
      </div>
    </div>
  );
}

export default Food;
