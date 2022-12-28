import React from 'react';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
const Title = () => {
  return (
    <div className='background'>
    <div className="title">
     <div className='header'>
     <PermMediaOutlinedIcon  className="gallery"style={{ color: "white" }}/>
     <h1>My Gallery</h1>
     </div>
      <h2>Your Pictures</h2>
      <p>Inspirational designs, illustrations, and graphic elements from the world’s best designers.</p>
    </div>
    </div>
  )
}

export default Title;