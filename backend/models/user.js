const mongoose = require('mongoose');

const user = mongoose.model('employee',{
    name :{type:String},
    email: {type:String},
    mobile:{type:Number}
})

module.exports = user;