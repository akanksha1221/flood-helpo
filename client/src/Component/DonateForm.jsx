// import React from 'react';
// import { CardElement, injectStripe, Elements } from '@stripe/react-stripe-js';

// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import '../Css/DonateForm.css';

// function DonateForm({ stripe }) {
//   const history = useHistory();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { token } = await stripe.createToken();

//     if (token) {
//       try {
//         const response = await axios.post('/process-payment', {
//           token: token.id,
//           amount: event.target.amount.value,
//           email: event.target.email.value,
//         });

//         if (response.data.success) {
//           console.log('Payment successful');
//           sendReceiptEmail(event.target.email.value);
//           history.push('/payment-success');
//         } else {
//           console.log('Payment failed');
//         }
//       } catch (error) {
//         console.log('Error occurred during payment:', error);
//       }
//     }
//   };

//   const sendReceiptEmail = async (email) => {
//     try {
//       await axios.post('/send-receipt-email', {
//         email: email,
//         // Include any additional information you want to include in the email
//       });
//       console.log('Receipt email sent');
//     } catch (error) {
//       console.log('Error occurred while sending receipt email:', error);
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col f-bg">
//             <div className="wrapper">
//               <form className="form" onSubmit={handleSubmit}>
//                 <h1>Fundraiser</h1>
//                 <div className="inputfield">
//                   <label>Name</label>
//                   <input name="name" type="text" className="input" required />
//                 </div>
//                 <div className="inputfield">
//                   <label>Email </label>
//                   <input name="email" type="email" className="input" required />
//                 </div>
//                 <div className="inputfield">
//                   <label>Phone Number</label>
//                   <input name="phone" type="tel" className="input" required />
//                 </div>
//                 <div className="inputfield">
//                   <label>Amount</label>
//                   <input name="amount" type="number" className="input" required />
//                 </div>
//                 <div className="inputfield">
//                   <label>Card Details</label>
//                   <CardElement className="card-element" />
//                 </div>
//                 <div className="inputfield">
//                   <input type="submit" name="submit" value="Donate" className="btn" />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default injectStripe(DonateForm);



// import React from 'react';
// import '../Css/DonateForm.css';
// function DonateForm(){
//     return(
//         <>
//           <div className="container-fluid">
//                 <div className="row">
//                     <div className="col f-bg">
//                        <div className=" wrapper">
//                        <form className="form" action="/donateinfo" method="post">
//                             <h1 >Fundraiser</h1>
//                             <div className="inputfield">
//                                 <label>Name</label>
//                                 <input name="name" type="text" className="input" required/>
//                             </div>  
//                             <div className="inputfield">
//                                 <label>Email </label>
//                                 <input name="email" type="email" className="input" required/>
//                             </div>       
//                             <div className="inputfield">
//                                 <label>Phone Number</label>
//                                 <input name="phone" type="tel" className="input" required/>
//                             </div> 
//                             {/* <div className="inputfield">
//                                 <label>Address</label>
//                                 <textarea name="address" className="textarea" required></textarea>
//                             </div> 
//                             <div className="inputfield">
//                                 <label>Postal Code</label>
//                                 <input name="postalcode" type="text" className="input" required/>
//                             </div>  */}
//                             <div className="inputfield">
//                                 <label>Amount</label>
//                                 <input name="amount" type="number" className="input" required/>
//                             </div>
//                             <div className="inputfield">
//                                 <input type="submit" name="submit" value="Donate" className="btn" />
//                             </div>
//                         </form>
                    
//                        </div>
//                        </div>	
//                 </div>
//             </div>
            
//         </>
//     )
// }
// export default DonateForm;