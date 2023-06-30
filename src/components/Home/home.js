import React from "react"
import "./home.css"
import {Link} from "react-router-dom"

// import { Button } from "react-bootstrap" // this is better if doing a lot of components
import Button from 'react-bootstrap/Button' // better to do like this as it doesn't import the whole library with the component
import Container from 'react-bootstrap/Container';

// import styles from "./home.css";


import Nav from "../Nav/nav"

function Home(){

  

    return (
        <div className = "homePage" style={{border:"solid", margin: "5px", background: "brown"}}>
            {/* <Nav/> */}
           
            <br/>
            {/* <div>
       <nav>
          <button><Link to = "/" >Home</Link></button>
          
          <button><Link to = "/food" >Food</Link></button>
       
        </nav>
      </div> */}
        </div>
    )
}

export default Home