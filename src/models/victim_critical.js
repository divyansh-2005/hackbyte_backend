const mongoose = require("mongoose")

const victim_criticalSchema = mongoose.Schema({
    phone:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    EmergencyType:{
        type:String,
        required:true
    },
    photo: {
        type: String, // Assuming the photo will be stored as a URL or file path
        required: false, // Optional field
    },
    

}, {timestamps:true} );

module.exports = mongoose.model("Victim_critical",victim_criticalSchema);