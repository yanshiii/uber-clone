const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const e = require('express');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/@.*\./, 'Please enter a valid email address']
    },
    password:{
        type: String,
        required: true,
        select: false
        //Authentication: JWT, bcrypt
    },
    socketId: {
        type: String,
    },
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: '1d' })
    return token;
}

userSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

userSchema.statics.hashPassword = async function(password) {
  if (!password) throw new Error('Password is required for hashing');
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;