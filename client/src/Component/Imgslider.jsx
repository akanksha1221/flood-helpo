import React from 'react';

function Imgslider({src}){
    let imgStyles={
        width:100+"%",
        height:"auto"
    }
    return <img src={src} alt="img" style={imgStyles}/>
}

export default Imgslider;