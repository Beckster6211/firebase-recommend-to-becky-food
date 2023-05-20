import React from "react"
import {Link} from "react-router-dom"

import Nav from "../Nav/nav"

function Home(){
    return (
        <div>
            <Nav/>
            <h2>Home</h2>
            
            
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