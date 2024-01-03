import React from 'react'
// import Avatar from '@mui/core/Avatar';
import Avatar from '@mui/material/Avatar';
import './Videocard.css';

function Videocard({image,title,channel,views,timestamp,channelimage}) {
  return (
    <div className='Videocard'>
        <img className='videocard_thumbnail' src={image} alt=''/>
        <div className='Videocard_info'>
        <Avatar className="Videocard_avatar" alt={channel} src={channelimage}/>
        <div className='Video_text'>
            <h4>{title}</h4>  
            <p>{channel}</p>
            <p>{views}.{timestamp}</p>

        </div>
        </div>
    </div>
  )
}

export default Videocard