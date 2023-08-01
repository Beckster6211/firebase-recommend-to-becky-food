import React, {useState} from "react"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FoodDislike(){

    const [rightShow, setRightShow] = useState(false);

    return(
        <div>
          <Button 
            className=""
            style={{

            }}
            variant="primary" 
            onClick={()=> setRightShow(true)}
            >
              Food Dislike ☞
          </Button>

          <Offcanvas 
          className=""
          style={{

          }}
          show={rightShow} 
          onHide={()=>setRightShow(false)} 
          placement="end"
          >
            <Offcanvas.Header 
            closeButton
            >
              <Offcanvas.Title>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default FoodDislike