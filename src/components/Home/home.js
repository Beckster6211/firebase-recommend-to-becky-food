import React, {useState} from "react"
import "./home.css"

//
import {Link} from "react-router-dom"
/* COULD DELETE LINK IMPORTED */

//
import BeckyAlert from "../Alerts/beckyAlert"
import NotBeckyAlert from "../Alerts/notBeckyAlert"

// import { Button } from "react-bootstrap" // this is better if doing a lot of components
// import Button from 'react-bootstrap/Button' // better to do like this as it doesn't import the whole library with the component

//
import Container from 'react-bootstrap/Container';

// import styles from "./home.css";

//
function Home({Becky}){

  console.log({Becky})


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
            <Container
            fluid
            className=""
            style={{
              minHeight:"75vh"
            }}
            
            >
            <p>Home Page</p>
            </Container>
        </div>
    )
}

export default Home