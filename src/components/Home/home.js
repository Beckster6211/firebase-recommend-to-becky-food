import React, {useState} from "react"
import "./home.css"
import {Link} from "react-router-dom"

// import { Button } from "react-bootstrap" // this is better if doing a lot of components
import Button from 'react-bootstrap/Button' // better to do like this as it doesn't import the whole library with the component
import Container from 'react-bootstrap/Container';

// import styles from "./home.css";

import Toast from 'react-bootstrap/Toast';
import Modal from "react-bootstrap/Modal"


import Nav from "../Nav/nav"

import BeckyAlert from "../Alerts/beckyAlert";

function Home(){

  // ///////////////////
  // const [show, setShow] = useState(true)
  // const [open, setOpen] = useState(true)
  // // const handleClose = () => setOpen(false);
  // // const handleShow = () => setShow(false);

  // console.log({show})
  // console.log({open})
  // //////////////////

    return (
        <div 
        className = "homePage" 
        style={{
          border:"solid", 
          margin: "5px", 
          background: "brown"
          }}>    
          {/* ///////////////////////////////////////////       */}
          {/* {
                show ?
                <Modal
                className="bg-light bg-opacity-50"
                style={{
                  fontSize:"3vw"
                }} 
                show={open} 
                onHide = {()=> setOpen(false)}
                centered
                animation
                
                >
                <Modal.Body 
                className="text-center rounded bg-success"
                style={{

                }}
                
                >
                  Hi Becky
                  <br/>
                  (you know what to do
                  <br/>
                  fingers crossed)
                </Modal.Body>
              </Modal>
                 : */}
                 {/* <Modal
                 className=""
                 style={{
 
                 }} 
                 show={open} 
                 onHide = {()=> setOpen(false)}
                 centered
                 animation
                 >
                 <Modal.Body 
                 className="text-center rounded bg-success"
                 style={{
 
                 }}
                 >
                   Welcome to...
                   <br/>
                   Recommend To Becky
                   <br/>
                   (sorry if you have already seen this once, working on it)
                 </Modal.Body>
               </Modal> */}

            {/* //     
            dont need this
            <Toast 
            // className="border border-dark border-3"
            // style={{

            // }}
            // bg="success"
            // // onClose={() => setOpen(false)}
            // show={open} 
            // // delay={5000} 
            // autohide
            // >
            // <Toast.Body
            // className=""
            // style={{

            // }}
            // >
            //   Hi Someone Else
            //   </Toast.Body>
            // </Toast> */}
{/* }  */}
{/* //////////////////////////////////// */}
            <Container
            fluid
            className="border border-primary border-3"
            style={{
              minHeight:"75vh"
            }}
            
            >
            <p>Home Page</p>
            {/* <BeckyAlert/> */}
            {/* <Nav/> */}
           
            {/* <br/> */}
            {/* <div>
       <nav>
          <button><Link to = "/" >Home</Link></button>
          
          <button><Link to = "/food" >Food</Link></button>
       
        </nav>
      </div> */}
      </Container>
        </div>
    )
}

export default Home