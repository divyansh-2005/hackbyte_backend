// src/routes/victimRouter.js

const express = require("express");
const { criticalform, noncriticalform, fetchCriticalVictims, fetchNonCriticalVictims } = require("../controllers/victimController");
const victimRouter = express.Router();

victimRouter.post("/critical", criticalform);
victimRouter.post("/non-critical", noncriticalform);

// Add these routes
victimRouter.get("/critical", fetchCriticalVictims);
victimRouter.get("/non-critical", fetchNonCriticalVictims);

module.exports = victimRouter;
