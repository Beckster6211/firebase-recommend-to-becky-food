import React, {useState} from "react"
import {authentication} from "../../firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

function Login(){

    const [signIn, setSignIn] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function beckyEmail(event){
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    function beckyPassword(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    } 

    const createUser = () => {
        createUserWithEmailAndPassword(authentication, email, password).then((userCredential) => {
    // Signed in 
    console.log(userCredential)
    const user = userCredential.user;
    console.log(user)
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
  });
    // const signInUser = () =>{
    //     signInWithEmailAndPassword(authentication, email, password).then((userCredential)=>{
    //         console.log(userCredential)
    //         const user = userCredential.user
    //         console.log({user})
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    }

return (
    <div>
        
        <button>login</button>
        <br/>
        <input name = "email" placeholder = "Email" onChange = {(event)=>{beckyEmail(event)}}/>
        <input name="password" placeholder ="Password" onChange = {(event) => {beckyPassword(event)}}/>
        {/* <input value = {email} placeholder = "Email" onChange = {text => setEmail(text)}/> */}
        {/* <input value = {password} placeholder ="Password" onChange = {text => setPassword(text)}/> */}
        <button onClick={createUser}>Sign In</button>
    </div>
)
}

export default Login