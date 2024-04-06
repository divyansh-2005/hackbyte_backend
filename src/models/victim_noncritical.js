// src/models/victim_noncritical.js

const mongoose = require("mongoose");

const victimSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    peopleImpacted: {
        type: Number,
        required: true,
    },
    criticalMedical: {
        type: String,
        required: true,
        enum: ['yes', 'no'],
    },
    urgency: {
        type: String,
        required: true,
        enum: ['low', 'medium', 'high'],
    },
    photo: {
        type: String, // Assuming the photo will be stored as a URL or file path
        required: false, // Optional field
    },
}, { timestamps: true });

// Correct the name here to match the schema name
module.exports = mongoose.model("Victim", victimSchema);
