import React from "react"
import {Link} from "react-router-dom"

function Nav(){
    return (
        <div>
            <nav>
                <button><Link to = "/" >Home</Link></button>
                <button><Link to = "/food" >Food</Link></button>
                
            </nav>
      </div>
    )
}

export default Nav