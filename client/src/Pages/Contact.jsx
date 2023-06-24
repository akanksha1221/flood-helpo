import React from 'react';
import contact from '../images/im6.jpg';
import Form from '../Component/ContactForm';
function Contact(){
    return(
        <>
            <div className="banner" style={{backgroundImage: `url(${contact})`}}>
                <h1 className="title">Contact</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Form/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;