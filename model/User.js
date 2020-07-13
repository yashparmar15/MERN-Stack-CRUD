const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const a = 1;

const UserSchema = new Schema ({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    college : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
});


module.exports = mongoose.model('User',UserSchema);