require('dotenv').config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
require("./db/conn");
const Contact = require("./models/contact");
const Donate = require("./models/donate");
const nodemailer = require("nodemailer");


const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,'../../', 'client/public/index');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.use(cors());

app.set('view engine', 'html');

app.get('*', function(req,res){
    res.sendFile(static_path);
});

// app.post("/saved", async (req,res)=>{
//    try{
//       const contactPeople = new Contact({
//           name: req.body.name,
//           email: req.body.email,
//           phone: req.body.phone,
//           message: req.body.message
//       })
//       const people = await contactPeople.save();
//       res.status(201).redirect('/contactsaved');
//       res.status(200).send(console.log(people));
//    }
//    catch(e){
//        res.status(400).send(console.log(e));
//    }
// });


app.post("/saved", async (req, res) => {
  try {
    const contactPeople = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });

    const savedContact = await contactPeople.save();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Set up your email configuration
      // For example, if using a Gmail account:
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Prepare the email message
    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email, // Use the obtained email address
      subject: "Thank you for contacting us",
      text: "We have received your message and will get back to you shortly.",
    };

    // Send the email
    res.status(201).redirect("/contactsaved");
    await transporter.sendMail(mailOptions);

    res.status(200).send(console.log(savedContact));
    console.log("Contact saved and email sent");
  } catch (error) {
    console.error("Error saving contact or sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});


// app.post("/donateinfo", async (req,res)=>{
//    try{
//       const donar = new Donate({
//           name: req.body.name,
//           email: req.body.email,
//           phone: req.body.phone,
//           address: req.body.address,
//           postalcode: req.body.postalcode,
//           amount: req.body.amount

//       })
//       const Dpeople = await donar.save();
//       res.status(201).redirect('/donar');
//    }
//    catch(e){
//        res.status(400).send(console.log(e));
//    }
// });


// Endpoint for processing the payment

// app.post('/process-payment', async (req, res) => {
//   const { token, amount, email } = req.body;

//   try {
//     const charge = await stripe.charges.create({
//       source: token,
//       amount: amount,
//       currency: 'inr',
//     });

//     // Payment success
//     res.json({ success: true });
//   } catch (error) {
//     console.log('Error occurred during payment:', error);
//     res.json({ success: false });
//   }
// });

// // Endpoint for sending the receipt email
// app.post('/send-receipt-email', async (req, res) => {
//   const { email } = req.body;

//   try {
//     // Create a Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       // Configure your email provider details here
//     });

//     // Send the email
//     await transporter.sendMail({
//       from: 'YOUR_EMAIL_ADDRESS',
//       to: email,
//       subject: 'Donation Receipt',
//       html: '<p>Thank you for your donation. Here is your receipt.</p>',
//     });

//     console.log('Receipt email sent');
//     res.sendStatus(200);
//   } catch (error) {
//     console.log('Error occurred while sending receipt email:', error);
//     res.sendStatus(500);
//   }
// });


// app.get('/donar',async (req,res)=>{
//     Donate.find({},(err,result)=>{
//         if(err)
//             console.log('Error in retrieving data: '+ err);
//         res.send(result);
//     }).sort({"amount":-1});
// })


app.listen(port,()=>{
    console.log(`server at ${port}`);
})