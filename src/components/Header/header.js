import React from "react"
import {Link} from "react-router-dom"
// import Nav from "../Nav/nav"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

function Header(){
    return(
        <div 
        className=""
        style={{
            // border:"solid black 2px"
        }}
        >
            {/* <Container 
            fluid
            className="bg-success border border-dark border-3"
            style={{

            }}
            > */}
                <Navbar 
                className="m-0"
                >
                    
                    <Container
                    fluid
                    className="bg-secondary-subtle py-2 mx-1  
                    border border-dark border-3
                    "
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
                        <Nav.Item
                className=""
                style={{
                }}
                >
                    <Nav.Link 
                    href = "/"
                    className="text-dark p-0"
                    style={{
                        fontSize:"3.5vw"
                    }}
                    >
                        Recommend To Becky
                        </Nav.Link>
                </Nav.Item>
                        {/* Recommend To Becky */}
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