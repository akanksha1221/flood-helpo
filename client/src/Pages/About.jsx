import React from 'react';
import about from '../images/im9.jpg';
import '../Css/AboutInfo.css';
import AboutInfo from '../Component/AboutInfo';
import AboutData from "../Data/AboutData";
import '../Css/banner.css';
function About(){
    return(
        <>
            <div className="banner" style={{backgroundImage: `url(${about})`}}>
                <h1 className="title">About Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col aboutinfo">
                        <h1>Your Helping Hand</h1>
                        
                        {AboutData.map((val,index)=>{
                        return(
                            <AboutInfo key={index} para={val.para}/>
                            )
                        })}

                        <p><b>The FloodHelpo Team</b></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;