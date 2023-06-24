import React from 'react';
function HomeInfo(props){
    return(
        <>   
            <div className="homeinfo">  
                <p>{props.para}</p>               
            </div>   
        </>
    )
}
export default HomeInfo;