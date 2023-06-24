import React, { useState } from "react";
import axios from "axios";
import "../Css/ContactForm.css";

const ContactForm = () => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="col box">
          <legend className="text-center header">
            Give your details
            <br />
            We will contact you shortly
            <br />
          </legend>

          <form action="/saved" method="post">
            <input
              id="fname"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <input
              id="phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              placeholder="Phone Number"
              type="tel"
              name="phone"
              required
            />
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
            <textarea
              id="message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              placeholder="Enter your message for us here."
              name="message"
              rows="7"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};


// const ContactForm = () => {
//   const [name, setname] = useState("");
//   const [phone, setphone] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setmessage] = useState("");
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let formErrors = {};
//     let isValid = true;

//     // Validate name
//     if (!name) {
//       formErrors.name = "Name is required";
//       isValid = false;
//     }

//     // Validate phone
//     if (!phone) {
//       formErrors.phone = "Phone number is required";
//       isValid = false;
//     }

//     // Validate email
//     if (!email) {
//       formErrors.email = "Email address is required";
//       isValid = false;
//     } else {
//       // Regex for email format validation
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
//         formErrors.email = "Please enter a valid email address";
//         isValid = false;
//       }
//     }

//     // Validate message
//     if (!message) {
//       formErrors.message = "Message is required";
//       isValid = false;
//     }

//     setErrors(formErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const isValid = validateForm();

//     if (isValid) {
//       // Create an object with the form data
//       const formData = {
//         name: name,
//         phone: phone,
//         email: email,
//         message: message,
//       };

//       // Send the form data to the backend
//       axios
//         .post("/saved", formData)
//         .then((response) => {
//           // Handle the response from the backend
//           console.log(response.data);
//         })
//         .catch((error) => {
//           // Handle errors
//           console.log(error);
//         });
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col box">
//           <legend className="text-center header">
//             Give your details
//             <br />
//             We will contact you shortly
//             <br />
//           </legend>

//           <form onSubmit={handleSubmit}>
//             <input
//               id="fname"
//               value={name}
//               onChange={(e) => setname(e.target.value)}
//               placeholder="Name"
//               type="text"
//               name="name"
//               required
//             />
//             {errors.name && <p className="error">{errors.name}</p>}

//             <input
//               id="phone"
//               value={phone}
//               onChange={(e) => setphone(e.target.value)}
//               placeholder="Phone Number"
//               type="tel"
//               name="phone"
//               required
//             />
//             {errors.phone && <p className="error">{errors.phone}</p>}

//             <input
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email address"
//               type="email"
//               name="email"
//               required
//             />
//             {errors.email && <p className="error">{errors.email}</p>}

//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setmessage(e.target.value)}
//               placeholder="Enter your message for us here."
//               name="message"
//               rows="7"
//               required
//             />
//             {errors.message && <p className="error">{errors.message}</p>}

//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

export default ContactForm;


