import React, {useState} from "react"

import Modal from "react-bootstrap/Modal"

function BeckyAlert(){
   
    const [open, setOpen] = useState(true)


    return(
        <div> 
            <Modal
                className="bg-light bg-opacity-50"
                style={{
                  fontSize:"3vw"
                }} 
                show={open} 
                onHide = {()=> setOpen(false)}
                centered
                animation
                
                >
                <Modal.Body 
                className="text-center rounded bg-success"
                style={{

                }}
                
                >
                  Hi Becky
                  <br/>
                  (you know what to do
                  <br/>
                  fingers crossed)
                </Modal.Body>
              </Modal>
                    
        </div>
    )
}

export default BeckyAlert;