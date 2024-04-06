// src/controllers/victimController.js

const victim_criticalModel = require("../models/victim_critical");
const victimModel = require("../models/victim_noncritical");

const criticalform = async (req, res) => {
    try {
        const newVictim = await victim_criticalModel.create(req.body);
        res.status(201).json({ message: "Critical victim added successfully", victim: newVictim });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding critical victim" });
    }
};

const noncriticalform = async (req, res) => {
    try {
        const newVictim = await victimModel.create(req.body);
        res.status(201).json({ message: "Non-critical victim added successfully", victim: newVictim });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding non-critical victim" });
    }
};

// Add these functions to src/controllers/victimController.js

const fetchCriticalVictims = async (req, res) => {
    try {
        const victims = await victim_criticalModel.find({});
        res.status(200).json({ victims });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching critical victims" });
    }
};

const fetchNonCriticalVictims = async (req, res) => {
    try {
        const victims = await victimModel.find({});
        res.status(200).json({ victims });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching non-critical victims" });
    }
};

// Don't forget to export these new functions
module.exports = { criticalform, noncriticalform, fetchCriticalVictims, fetchNonCriticalVictims };
