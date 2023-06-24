const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        // unique:true
    },
    phone: {
        type: Number,
         required: true,
         //unique:true
    },
    message:{
        type: String,
        required: true
    }
});
/*
contactSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
*/

const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;