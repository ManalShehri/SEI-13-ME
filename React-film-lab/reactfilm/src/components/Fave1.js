import React, { useState } from 'react'
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
export default function Fave1(props) {
    
    // functional component 
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation()
        props.onFaveToggle()
        // console.log('from parent',props.handleFaveToggle )
        // Add this line. You'll call the function passed through props.
        console.log('handling Fave click!');
    }
          
    const isFaveClass = (props.isFave) ? 'remove_from_queue' : 'add_to_queue' 
    
    return (
        <div className={'film-row-fave' + ' ' + isFaveClass }> 
        {(props.isFave) ?<RemoveFromQueueIcon onClick={handleClick}/>:<AddToQueueIcon onClick={handleClick}/>}

            {/* <AddToQueueIcon onClick={handleClick}/> */}
        </div>
    )
}
