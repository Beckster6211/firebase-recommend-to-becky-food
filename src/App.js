import "./App.css";
import Login from "./components/Login/loginButton";
import Food from "./components/Food/food";

function App() {
  return (
    <div className="App">
      <h3>Recommend to Becky</h3>
      <Login/>
      <Food />
    </div>
  );
}

export default App;
