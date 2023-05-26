import React from "react"
import {Link} from "react-router-dom"

function Header(){
    return(
        <div >
            <header>
                <h3>Recommend to Becky</h3>
                <button><Link to = "/login" >Login</Link></button>
            </header> 
        </div>
    )

}

export default Header