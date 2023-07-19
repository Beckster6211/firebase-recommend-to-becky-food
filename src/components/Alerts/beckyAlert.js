import React, {useState, useEffect} from "react"

import Alert from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton';

function BeckyAlert(){

    const [show, setShow] = useState(true)
    console.log({show})

    /////// setTimeout or setInterval 
    const AlertBeckyMessage = () =>{
      useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log("hello")
        }, 2000)
        return () => clearTimeout(timer)
    }, [])  
    }

    const AlertNotBeckyMessage = () =>{
        useEffect(()=>{
          const timer = setTimeout(()=>{
              console.log("hello")
          }, 2000)
          return () => clearTimeout(timer)
      }, [])  
      }

        const IsBecky = () =>{
            if(show === true){
                AlertBeckyMessage()
            } else {
                AlertNotBeckyMessage()
            }
        }

    return(
        <div> 
            <p>Becky Alert</p>
           
            {
                show ? 
        
                <Alert 
            variant = "success"
            >
                Hello Becky
        
                {/* &nbsp; */}
                {/* <CloseButton 
                onClick={console.log("Becky logged in")}
                /> */}
            </Alert>
            :
            <Alert 
            variant = "success"
            >
                Hello someone else 
                {/* &nbsp; */}
                {/* <CloseButton 
                onClick={()=> setShow(false)}
                /> */}
            </Alert>
            }
           


            
        </div>
    )
}

export default BeckyAlert;