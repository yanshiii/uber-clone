const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
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
        lowercase: true,
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
    status: {
        type: String,
        enum: ['active', 'inactive', 'banned'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        plate: {
            type: String,
            required: true,
            match: [/^[A-Z]{2}\s?\d{2}\s?[A-Z]{1,2}\s?\d{4}$/, 'Please enter a valid vehicle plate number']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        },
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    },
})
captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: '1d' })
    return token;
}

captainSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

captainSchema.statics.hashPassword = async function(password) { 
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;