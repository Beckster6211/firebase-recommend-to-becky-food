import React, {useState} from "react"
import {authentication} from "../../firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"

function LoginForm(){
    const [becky, setBecky] = useState(false)
    const [signIn, setSignIn] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

        
    // console.log(signIn)
    function getEmail(event){
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    function getPassword(event){
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
    }

    const signInUser = () => {
        signInWithEmailAndPassword(authentication, email, password).then((userCredential)=>{
            console.log(userCredential)
            let user = userCredential.user
            console.log({user})
            // if(user.uid === "ZsU3UpgsYJgXbzWS1sz8uOyxunq1"){
            //  setBecky(true)
            // }
            setSignIn(true)
            // window.location.reload();
        }).catch((error)=>{
            console.log(error)
        })
    }

    const signOutUser = () => {
        signOut(authentication).then((response)=>{
            //sign out successful
            setSignIn(false)
            console.log("sign out successful")
            
            // window.location.reload();
        }).catch((error)=>{
            console.log(error)
        })

    }    
return (
    <div>
        
        {/* <button>login</button> */}
        <br/>
        <button onClick={createUser}>Create User</button>
        <br/>
        <input type = "email" placeholder = {"Email..."} autoComplete="off" onChange = {(event)=>{getEmail(event)}}/>
        &nbsp;
        <input type="password" placeholder ="Password" autoComplete="off" onChange = {(event) => {getPassword(event)}}/>
       
        {/* <button onClick={createUser}>Create User</button> */}
        <br/>
        {/* {signIn === true ? 
        <button onClick={signOutUser}>Sign Out</button>
        : 
        <button onClick={signInUser}>Sign In</button>
        } */}
        <button onClick={signInUser}>Sign In</button>
        <button onClick={signOutUser}>Sign Out</button>
        {/* {becky === true ? 
        <p>"Hi Becky"</p>
        : <p>"Hello someone else"</p>
    } */}
    </div>
)
}

export default LoginForm