import "./App.css";
import Login from "./components/Login/loginButton";
import Food from "./components/Food/food";
import Home from "./components/Home/home";
import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";

import React, {useState} from "react"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {Route, Routes, Link} from "react-router-dom"

function App() {
const [isBecky, setIsBecky] = useState(false)
console.log({isBecky})

const auth = getAuth()    
onAuthStateChanged(auth, (user)=>{
  console.log({user})
  // console.log(user.uid)
        // console.log(user.uid)
        if(user === null){
          console.log("this user isnt becky")
          setIsBecky(false)
        } else if (user.uid === "QKMfrQjVekU1HqN4VUlnSyR44ks2"){
          console.log("this user is Becky")
          setIsBecky(true)
        }
    })

  return (
  <div className="App">
    <Header/>
    <Nav/>
    {/* <header>
      <h3>Recommend to Becky</h3>
      <button><Link to = "/login" >Login</Link></button>
    </header> */}
    <br/>
      {/* <div>
       <nav>
          <button><Link to = "/" >Home</Link></button>
          
          <button><Link to = "/food" >Food</Link></button>
       
        </nav>
      </div> */}
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/food" element ={<Food Becky = {isBecky}/>} />
      <Route path = "/login" element = {<Login/>} />
      {/* <Login/> */}
      {/* food will act as home page for now
      <Food Becky = {isBecky}/> */}
      {/* <Food /> */}
      
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;


// import React, {useState} from "react"
// import {authentication} from "../../firebase"
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"

// function LoginForm(){
//     const [becky, setBecky] = useState(false)
//     const [signIn, setSignIn] = useState(false)
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

    
//     // console.log(signIn)
//     function getEmail(event){
//         console.log(event.target.value)
//         setEmail(event.target.value)
//     }

//     function getPassword(event){
//         console.log(event.target.value)
//         setPassword(event.target.value)
//     } 

  //   const createUser = () => {
  //       createUserWithEmailAndPassword(authentication, email, password).then((userCredential) => {
  //   // Signed in 
  //   console.log(userCredential)
  //   const user = userCredential.user;
  //   console.log(user)
    
  // }).catch((error) => {
  //   const errorCode = error.code;
  //   console.log(errorCode)
  //   const errorMessage = error.message;
  //   console.log(errorMessage)
   
  // });
  //   }

//     const signInUser = () => {
//         signInWithEmailAndPassword(authentication, email, password).then((userCredential)=>{
//             console.log(userCredential)
//             let user = userCredential.user
//             console.log({user})
//             if(user.uid === "tFvXi6smSTTgohw9kQMQrPIGUZ22"){
//              setBecky(true)
//             }
//             setSignIn(true)
//             // window.location.reload();
//         }).catch((error)=>{
//             console.log(error)
//         })
//     }

//     const signOutUser = () => {
//         signOut(authentication).then((response)=>{
//             //sign out successful
//             setSignIn(false)
//             console.log("sign out successful")
            
//             // window.location.reload();
//         }).catch((error)=>{
//             console.log(error)
//         })

//     }    
// return (
//     <div>
        
//         {/* <button>login</button> */}
//         <br/>
//         <button onClick={createUser}>Create User</button>
//         <br/>
//         <input type = "email" placeholder = {"Email..."} autoComplete="off" onChange = {(event)=>{getEmail(event)}}/>
//         &nbsp;
//         <input type="password" placeholder ="Password" autoComplete="off" onChange = {(event) => {getPassword(event)}}/>
       
//         {/* <button onClick={createUser}>Create User</button> */}
//         <br/>
//         {/* {signIn === true ? 
//         <button onClick={signOutUser}>Sign Out</button>
//         : 
//         <button onClick={signInUser}>Sign In</button>
//         } */}
//         <button onClick={signInUser}>Sign In</button>
//         <button onClick={signOutUser}>Sign Out</button>
//         {becky === true ? 
//         <p>"Hi Becky"</p>
//         : <p>"Hello someone else"</p>
//     }
//     </div>
// )
// }

// export default LoginForm
