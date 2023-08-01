import React, {useState} from "react"
import "./home.css"
import {Link} from "react-router-dom"


import BeckyAlert from "../Alerts/beckyAlert"
import NotBeckyAlert from "../Alerts/notBeckyAlert"

// import { Button } from "react-bootstrap" // this is better if doing a lot of components
// import Button from 'react-bootstrap/Button' // better to do like this as it doesn't import the whole library with the component
import Container from 'react-bootstrap/Container';

// import styles from "./home.css";

/*
import Modal from "react-bootstrap/Modal"
*/

function Home({Becky}){

  console.log({Becky})

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
        className = "homePage border border-dark border-3 mx-1 my-2 bg-secondary-subtle" 
        style={{

          }}>   

          {
            Becky ?
            <BeckyAlert/>
            : 
            <NotBeckyAlert/>
          } 
          {/* ///////////////////////////////////////////       */}
          {/* {
                Becky ?
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
                 :
                 <Modal
                 className="bg-light bg-opacity-50"
                 style={{
                  fontSize:"2.5vw"
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
                   <i><small>(sorry if already seen this once, working on that)</small></i>
                 </Modal.Body>
               </Modal> 
              } */}

{/* //////////////////////////////////// */}
            
            <Container
            fluid
            className=""
            style={{
              minHeight:"75vh"
            }}
            
            >
            <p>Home Page</p>
      {/* 
      <div>
       <nav>
          <button>
            <Link 
              to = "/" 
            >
              Home
            </Link>
          </button>
          
          <button>
            <Link 
              to = "/food" 
            >
              Food
              </Link>
            </button>
       
        </nav>
      </div> 
      */}
      </Container>
        </div>
    )
}

export default Home