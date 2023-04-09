const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const todoSchema = new mongoose.Schema({
    item: {
        type: String,
    },

});

module.exports = mongoose.model('Todo', todoSchema);
