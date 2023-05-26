import React from "react"
import {Link} from "react-router-dom"
import Nav from "../Nav/nav"

function Header(){
    return(
        <div >
            <header>
                <h3>Recommend to Becky</h3>
                <button><Link to = "/login" >Login</Link></button>
                {/* <Nav/> */}
            </header> 
        </div>
    )

}

export default Header