const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { fullname, email, password, vehicle } = req.body;

    // Check required fields
    if (!fullname || !fullname.firstname || !email || !password || !vehicle) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check for existing captain
        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({ message: 'Captain with this email already exists' });
        }

        // Hash password
        const hashedPassword = await captainModel.hashPassword(password);
        
        // Create captain with proper structure
        const captain = await captainService.createCaptain({
            fullname: {
                firstname: fullname.firstname,
                lastname: fullname.lastname || '' // Handle optional lastname
            },
            email,
            password: hashedPassword,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate.toUpperCase().replace(/\s+/g, ' ').trim(),
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType
            },
            status: 'inactive' // Default status
        });

        // Generate token and respond
        const token = captain.generateAuthToken();
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        
        res.status(201).json({
            message: 'Captain registered successfully',
            token,
            captain
        });
        
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
