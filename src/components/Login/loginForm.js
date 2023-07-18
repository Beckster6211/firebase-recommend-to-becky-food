import React, {useState} from "react"
import {authentication} from "../../firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {Link} from "react-router-dom"

import Container from "react-bootstrap/Container"

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
    <div
    className=""
    style={{
        // backgroundColor:"blue",
        minHeight: "60vh",
        border: "solid black 2px"
    }}
    >
        <br/>
        <Container 
        // fluid
        className="bg-secondary-subtle border border-secondary border-3 rounded py-3"
        style={{

        }}
        >
        {/* <button>login</button> */}
        {/* <br/> */}
        {/* <button onClick={createUser}>Create User</button> */}
        {/* <br/>
        <br/> */}
        <button 
        className=""
        style={{

        }}
        onClick={signOutUser}>
            <Link 
            to = "/" >
            Sign Out
            </Link>
        </button>
        <br/>
        <br/>
        <input 
        className=""
        style={{

        }}
        type = "email" 
        placeholder = {"Email..."} 
        autoComplete="off" 
        onChange = {(event)=>{getEmail(event)}}
        />
        <br/>
        <br/>
        <input 
        className=""
        style={{

        }}
        type="password" 
        placeholder ="Password" 
        autoComplete="off" 
        onChange = {(event) => {getPassword(event)}}
        />

        {/* <button onClick={createUser}>Create User</button> */}
        <br/>
        <br/>

        {/* {signIn === true ? 
        <button onClick={signOutUser}>Sign Out</button>
        : 
        <button onClick={signInUser}>Sign In</button>
        } */} 

<br/>
        <button 
        className=""
        style={{

        }}
        onClick={signInUser}> 
            <Link 
            to = "/">
            Sign In
            </Link>
        </button>
        <br/>
        {/* /
        <br/>
        <button onClick={signOutUser}><Link to = "/" >Sign Out</Link></button> */}
        {/* {becky === true ? 
        <p>"Hi Becky"</p>
        : <p>"Hello someone else"</p>
    } */}
        </Container>
        {/* ////////////////////////// */}
        {/* <button>login</button> */}
        {/* <br/>
        <button onClick={createUser}>Create User</button>
        <br/>
        <br/>
        <input type = "email" placeholder = {"Email..."} autoComplete="off" onChange = {(event)=>{getEmail(event)}}/>
        <br/>
        <br/> */}
        {/* <input type="password" placeholder ="Password" autoComplete="off" onChange = {(event) => {getPassword(event)}}/> */}
       
        {/* <button onClick={createUser}>Create User</button> */}
        {/* <br/>
        <br/> */}
        {/* {signIn === true ? 
        <button onClick={signOutUser}>Sign Out</button>
        : 
        <button onClick={signInUser}>Sign In</button>
        } */} 
        {/* <br/>
        <button onClick={signInUser}> <Link to = "/" >Sign In</Link></button>
        <br/> */}
{/*        
        /
        <br/>
        <button onClick={signOutUser}><Link to = "/" >Sign Out</Link></button> */}
        {/* {becky === true ? 
        <p>"Hi Becky"</p>
        : <p>"Hello someone else"</p>
    } */}
    </div>
)
}

export default LoginForm