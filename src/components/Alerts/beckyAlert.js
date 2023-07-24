import React, {useState, useEffect} from "react"

import {createElement} from "react"

import Alert from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton';

import Fade from 'react-bootstrap/Fade';

import Toast from 'react-bootstrap/Toast';

function BeckyAlert(){

    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(true)
    console.log({show})

    /////// setTimeout or setInterval 
    // const AlertBeckyMessage = () =>{
    //   useEffect(()=>{
    //     const timer = setTimeout(()=>{
    //         console.log("hello")
    //     }, 2000)
    //     return () => clearTimeout(timer)
    // }, [])  
    // }

    // const AlertNotBeckyMessage = () =>{
    //     useEffect(()=>{
    //       const timer = setTimeout(()=>{
    //           console.log("hello")
    //       }, 2000)
    //       return () => clearTimeout(timer)
    //   }, [])  
    //   }      
        



    return(
        <div> 
            {/* <p>Becky Alert</p> */}
           {/* {setTimeout(()=> 
           <Alert 
                    className=""
                    variant="success"
                    >
                        Hello Becky
                    </Alert>
           ), 1000} */}

              
          
          {/* { 
            show ?


            BeckyAlert()

              :

              useEffect(()=>{
                const timer = setTimeout(()=>{
                    console.log("this timer will run after 3 seconds")
                }, 3000)
                return ()=> clearTimeout(timer)
              },[])
          } */}
            {
                
                show ?
            <Toast 
            onClose={() => setOpen(false)}
            show={open} 
            delay={5000} 
            autohide
            >
            <Toast.Header>
            <img
            //   src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">show true</strong>
            {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
                :
                <Toast onClose={() => setOpen(false)} show={open} delay={5000} autohide>
          <Toast.Header>
            <img
            //   src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">show false</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
            }
            

                    {/* // setTimeout(()=>{ */}
                    {/* //     document.createElement()
                    // }) */}
                    {/* <Alert 
                    className=""
                    variant="success"
                    >
                        Hello Becky
                    </Alert> */}
                
                    
        </div>
    )
}

export default BeckyAlert;