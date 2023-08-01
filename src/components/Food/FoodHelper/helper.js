import React, {useState} from "react"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FoodHelper(){

    const [TopShow, setTopShow] = useState(false);

    return(
        <div>
            <Button 
            className=""
            style={{

            }}
            variant="primary" 
            onClick={()=>setTopShow(true)}
          >
            Food Helper ☝️ 
          </Button>

          <Offcanvas 
            className=""
            style={{
              
            }}
            show={TopShow} 
            onHide={()=>setTopShow(false)} 
            placement="top"
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

export default FoodHelper

