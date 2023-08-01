import React, {useState} from "react"

import Modal from "react-bootstrap/Modal"

function NotBeckyAlert(){

    const [open, setOpen] = useState(true)

    return(
        <div>
            <Modal
                 className="bg-light bg-opacity-50"
                 style={{
                  fontSize:"2.5vw"
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
                   Welcome to...
                   <br/>
                   Recommend To Becky
                   <br/>
                   <i><small>(sorry if already seen this once, working on that)</small></i>
                 </Modal.Body>
               </Modal> 
        </div>
    )
}

export default NotBeckyAlert