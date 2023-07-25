import React from "react"
import {Link} from "react-router-dom"
import Nav from "../Nav/nav"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function Header(){
    return(
        <div >
            {/* <Container 
            fluid
            className="bg-success border border-dark border-3"
            style={{

            }}
            > */}
                <Navbar 
                className="p-0"
                >
                    
                    <Container
                    fluid
                    className="bg-secondary-subtle py-2"
                    style={{
                        fontSize:"3vw"
                    }}
                    >
                        <Navbar.Brand 
                        className="p-0 m-0"
                        // href="/login" 
                        >
                            <Image 
                            className=""
                            style={{
                                width:"5vw"
                            }}
                            src="https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-14936128.jpg&fm=jpg" 
                            roundedCircle
                            />
                                
                            {/* Portfolio */}
                        </Navbar.Brand>
                        Recommend To Becky
                        <Navbar.Brand 
                        href="/login" 
                        className="p-0 m-0"
                        >
                            <Image
                            className=""
                            style={{
                                width:"5vw"
                            }}
                            src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
                            roundedCircle
                            />

                            {/* Login */}
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            {/* </Container> */}
            {/* <header>
                <h3>Recommend to Becky</h3>
                <button><Link to = "/login" >Login</Link></button>
                {/* <Nav/> */}
            {/* </header>  
            */}
        </div>
    )

}

export default Header