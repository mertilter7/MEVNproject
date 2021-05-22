const mongoose = require('mongoose')
const Joi = require('@hapi/joi')
const UserSchema = new mongoose.Schema({

    userName : {
        type: Object,
        trim: true,
        minlength: 3,
        maxlength: 50,
        unique:true
    }
},{collection:'users', timestamps:true});

//user schema
const schema = Joi.object({
    userName : Joi.string().min(3).max(50).trim()
})

//new user validation
UserSchema.methods.joiValidation = function (userObject) {
    schema.required();
    return schema.validate(userObject)
}
UserSchema.methods.toJSON = function() {
    const user = this.toObject();
    return user;
}
const User = mongoose.model('User', UserSchema)

module.exports = User;