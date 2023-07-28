import React from "react"

import Container from "react-bootstrap/Container"
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function Footer(){
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
                            src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
                            roundedCircle
                            />
                            
                                
                            {/* Portfolio */}
                        </Navbar.Brand>
                        Becky Recommends
                        <Navbar.Brand 
                        href="/login" 
                        className="p-0 m-0"
                        >
                            
                            <Image 
                            className=""
                            style={{
                                width:"5vw"
                            }}
                            src="https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-14936128.jpg&fm=jpg" 
                            roundedCircle
                            />
                            {/* Login */}
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            {/* <footer>
            <h3>Becky Recommends</h3>
            <button>Login</button>
            </footer> */}
        </div>
    )
}

export default Footer