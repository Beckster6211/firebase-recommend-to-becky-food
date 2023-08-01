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
            variant="danger" 
            onClick={()=> setRightShow(true)}
            >
              Food Dislike ☞
          </Button>

          <Offcanvas 
          className="bg-danger-subtle"
          style={{

          }}
          show={rightShow} 
          onHide={()=>setRightShow(false)} 
          placement="end"
          >
            <Offcanvas.Header 
              className="bg-danger"
            closeButton
            >
              <Offcanvas.Title>
              🤮 I Dislike... 🤮
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            bullet point list of what I dislike
              <br/>
              .
              .
              .
              .
              <br/>
              yuck
              {/* maybe do a video of explaining what I dislike */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default FoodDislike