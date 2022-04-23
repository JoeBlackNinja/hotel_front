import React from 'react';

import foto1 from './images/1.jpg';
import foto2 from './images/2.jpg'



export default function 
Home
() {
  return (
    <>   
      <div style={{width:"80vw"}}>
        <img style={{objectFit:'cover'}} src={foto1} />           
      </div>
      <div style={{width:"80vw"}}>    
        <img style={{objectFit:'cover'}} src={foto2} />        
      </div>
    </>
  )
}
