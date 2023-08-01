import React, {useState} from "react"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FoodLike(){

    const [show, setShow] = useState(false);

    return(
        <div>
          <Button 
            className=""
            style={{

            }}
            variant="primary" 
            onClick={()=>setShow(true)}
          >
            Like ☜
          </Button>

          <Offcanvas 
            className="bg-success-subtle"
            style={{
              
            }}
            show={show} 
            onHide={()=>setShow(false)} 
            placement="start"
          >
            <Offcanvas.Header
              className="bg-success" 
              closeButton
            >
              <Offcanvas.Title
              className=""
              >
              😋 I Like...😋
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              bullet point list of what I like
              <br/>
              .
              .
              .
              .
              <br/>
              yummy
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default FoodLike