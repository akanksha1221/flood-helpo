import React from 'react';
import Ticker from '../Component/Ticker';
import Slides from '../Component/Slideshow';
import HomeData from '../Data/HomeData';
import HomeInfo from '../Component/HomeInfo';
import Emergency from '../Component/EmgKit';
import "../Css/Home.css";

function Home(){
    return(
        <>
            <Ticker />
            <Slides/>
            <div className="container home">
                <div className="row">
                    <div className="col-lg-8 home-col">
                        <h3>Floods In India</h3>
                        {HomeData.map((val,index)=>{
                            return(
                                 <HomeInfo key={index} para={val.para}/>
                                  )
                         })}
                    </div>
                    <div className="col home-col">
                        <Emergency/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;