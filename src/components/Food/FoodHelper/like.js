import React, {useState} from "react"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FoodLike(){

    const [leftShow, setLeftShow] = useState(false);

    return(
        <div>
          <Button 
            className=""
            style={{

            }}
            variant="success" 
            onClick={()=>setLeftShow(true)}
          >
            Like ☜
          </Button>

          <Offcanvas 
            className="bg-success-subtle"
            style={{
              
            }}
            show={leftShow} 
            onHide={()=>setLeftShow(false)} 
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
              {/* maybe do a video of explaining what I like */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default FoodLike