import React from 'react';
import '../Css/NewsCard.css';

function NewsCard(props) {
    return (
        <>
            <div className="card">
                <img className="card-img-top console.log(articles)" src={props.imgsrc}  alt=""/>
                    <div className="card-body cardBottom">
                        <h5 className="card-title cardTitle">{props.title}</h5>
                        <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more...</a>
                    </div>
            </div>


        </>
    )
}
export default NewsCard;



{/* { <div classNameName="col-xl lg-3 md-4 sm-4 xs-8 m-3 mycard">      
    <div classNameName="card">
                <img classNameName="cardTop" src={props.imgsrc} alt="images"/>            
                <div classNameName="cardBottom">
                    <a href={props.link} target="_blank" rel="noreferrer"> 
                    <div classNameName="cardText">                     
                        <h3 classNameName="cardTitle">{props.title}</h3>                       
                    </div>
                     </a> 
                </div>
            </div>    
     </div>   }                       */}
