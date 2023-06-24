import React from 'react';
import donate from '../images/im3.jpg';
import Donateform from '../Component/DonateForm';
function Donate(){
    return(
        <>
            <div className="banner" style={{backgroundImage: `url(${donate})`}}>
                <h1 className="title">Donate</h1>
            </div>
            <Donateform/>
        </>
    )
}
export default Donate;