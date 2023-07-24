import React from "react"
import {Link} from "react-router-dom"

import Nav from 'react-bootstrap/Nav';

function Navigation(){
    return (
        <div 
        className=""
        >
            {/* <nav>
                <button><Link to = "/" >Home</Link></button>
                <button><Link to = "/food" >Food</Link></button>
                
            </nav> */}
            <Nav 
            className="border border-dark border-3 rounded bg-light m-1 "
            style={{
                // fontSize:"1.4vw"
            }}
            justify 
            variant="tabs" 
            defaultActiveKey={"/home"}
            >
                {/* ////////////// 
                Maybe take away home button or link home to header
                */}
                <Nav.Item
                className="border-end border-dark border-2 "
                style={{
                    background: "brown"
                }}
                >
                    <Nav.Link 
                    href = "/"
                    className="text-dark p-0"
                    style={{
                        fontSize:"2.5vw"
                    }}
                    >
                        Home</Nav.Link>
                </Nav.Item>
                {/* ////////////// 
                Maybe take away home button or link home to header
                */}
                <Nav.Item
                className="border-end border-dark border-2 bg-warning"
                >
                    <Nav.Link href="/food"
                    className="text-dark p-0"
                    style={{
                        fontSize:"2.5vw"
                    }}
                    >
                        Food</Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2"
                >
                    <Nav.Link
                    className="text-dark p-0"
                    style={{
                        fontSize:"2.5vw"
                    }}
                    >
                        Watch</Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2"
                >
                    <Nav.Link
                    className="text-dark p-0"
                    style={{
                        fontSize:"2.5vw"
                    }}
                    >
                        Binge</Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2"
                >
                    <Nav.Link
                    className="text-dark p-0"
                    style={{
                        fontSize:"2.5vw"
                    }}
                    >
                        Read</Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2"
                >
                    <Nav.Link
                    className="text-dark p-0"
                    style={{
                        fontSize:"2.5vw"
                    }}
                    >
                        Visit</Nav.Link>
                </Nav.Item>
                <Nav.Item
                className=""
                >
                    <Nav.Link
                    className="text-dark p-0"
                    style={{
                        fontSize:"2.5vw"
                    }}
                    >
                        Try</Nav.Link>
                </Nav.Item>
            </Nav>
      </div>
    )
}

export default Navigation