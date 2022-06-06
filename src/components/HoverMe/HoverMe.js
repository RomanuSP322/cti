
import React, { useState} from 'react';
import './HoverMe.css';


function HoverMe() {
      const [hover, setHover] = useState(false)

  return (
      <div className='hoverme-wrapper' onMouseEnter={() => setHover(true)}>
     { hover ? null :<div className='hoverme'>
	<div className='hoverme__circle'></div>
	<div className='hoverme__circle'></div>
	<div className='hoverme__circle'></div>
    <div className='hoverme__circle'></div>
</div>
}
</div> 
  );
}

export default HoverMe;