import React, {useState} from "react"

//
import {authentication} from "../../firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {Link} from "react-router-dom"

//
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

//
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
        backgroundColor:"beige",
        minHeight: "60vh",
        // border: "solid black 2px"
    }}
    >
        <br/>
        <br/>
        <br/>
        <br/>
        <Container 
        // fluid
        className="bg-secondary-subtle border border-secondary border-3 rounded  pt-5"
        style={{
            // width:"75vh",
            // height:"40vh"
        }}
        >
            <Button 
            variant="success"
            className="bg-success-subtle"
            style={{

            }}
            onClick={signOutUser}
            >
                <Link 
            to = "/" 
            className="text-dark text-decoration-none"
            >
            Sign Out
            </Link>
            </Button>
        <br/>
        <br/>
            <Form 
            className=""
            style={{
                fontsize:"1.6vw"
            }}
            >           
                <Form.Group
                className=""
                style={{
                    // width:"62vh"
                }}
                >
                    <FloatingLabel
                    controlId="loginEmail"
                    label="Email address"
                    >
                        <Form.Control
                            type="email"
                            placeholder="Email..."
                            autoComplete="off"
                            onChange = {(event)=>{getEmail(event)}}
                            className="border border-secondary border-3"
                            style={{
                            }}
                        > 
                        </Form.Control>
                    </FloatingLabel>
                </Form.Group>
        <br/>
                <Form.Group>
                    <FloatingLabel
                    controlId="LoginPassword"
                    label="Password"
                    >
                    <Form.Control
                    type="password"  
                    autoComplete="off" 
                    placeholder="Password..."
                    onChange = {(event) => {getPassword(event)}}
                    className="border border-secondary border-3"
                    style={{}}
                    >
                    </Form.Control>
                    </FloatingLabel>
                    
                </Form.Group>

                

            </Form>
        <br/>
            <Button 
            variant="primary"
            className="bg-primary-subtle"
            style={{

            }}
            onClick={signInUser}
            >
                <Link 
            to = "/" 
            className="text-dark text-decoration-none"
            >
            Sign In
            </Link>
            </Button>
        
        <br/>
        <br/>      
        <br/>
        <br/>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
)
}

export default LoginForm