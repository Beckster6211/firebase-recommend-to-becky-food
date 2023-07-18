import React, {useState} from "react"
// import {authentication} from "../../firebase"
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"

import LoginForm from "./loginForm"

function Login(){

    // const [signIn, setSignIn] = useState(false)
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // // console.log(signIn)
    // function getEmail(event){
    //     console.log(event.target.value)
    //     setEmail(event.target.value)
    // }

    // function getPassword(event){
    //     console.log(event.target.value)
    //     setPassword(event.target.value)
    // } 

//     const createUser = () => {
//         createUserWithEmailAndPassword(authentication, email, password).then((userCredential) => {
//     // Signed in 
//     console.log(userCredential)
//     const user = userCredential.user;
//     console.log(user)
//   }).catch((error) => {
//     const errorCode = error.code;
//     console.log(errorCode)
//     const errorMessage = error.message;
//     console.log(errorMessage)
//   });
//     }
    
    // const signInUser = () => {
    //     signInWithEmailAndPassword(authentication, email, password).then((userCredential)=>{
    //         console.log(userCredential)
    //         const user = userCredential.user
    //         console.log({user})
    //         setSignIn(true)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }

    // const signOutUser = () => {
    //     signOut(authentication).then((response)=>{
    //         //sign out successful
    //         setSignIn(false)
    //         console.log("sign out successful")
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }

return (
    <div>
        
        {/* <button>login</button> */}
        <br/>
        <LoginForm />
        {/* <input name = "email" placeholder = "Email" onChange = {(event)=>{getEmail(event)}}/>
        <input name="password" placeholder ="Password" onChange = {(event) => {getPassword(event)}}/>
        <button onClick={createUser}>Create User</button> */}
        {/* <input value = {email} placeholder = "Email" onChange = {text => setEmail(text)}/> */}
        {/* <input value = {password} placeholder ="Password" onChange = {text => setPassword(text)}/> */}
        {/* {signIn === true ? 
        <button onClick={signOutUser}>Sign Out</button>
        : 
        <button onClick={signInUser}>Sign In</button>
        } */}
        {/* <br/> */}
    </div>
    
)
}

export default Login