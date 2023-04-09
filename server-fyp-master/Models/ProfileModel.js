const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const profileSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
   
});


module.exports = mongoose.model('Profile', profileSchema);


