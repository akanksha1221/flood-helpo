const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    phone: {
        type: Number,
        required: true,
        unique:true
    },
    address:{
        type: String,
        required: true
    },
    postalcode:{
        type: Number,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }
});
/*
donateSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
*/
const Donate = new mongoose.model("Donate", donateSchema);

module.exports = Donate;