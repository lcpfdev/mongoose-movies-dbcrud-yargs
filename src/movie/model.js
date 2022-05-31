const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String, // Has to be a string when someone adds title
        unique: true, // cant save same title twice
        required: true, // ifs undefined it wont be saved

    },
    actor: {
    type: String,  
        default: "Not specified" // if they dont provide an actor it will = unspecified
    },

    year: { 
        type: Number,
            default: "Not specified"
    },
})  // Schema defines are constraints what we can and cant searched for

const Movie = mongoose.model("Movie", movieSchema) // We will now be doing Movie.find / Movie.create


module.exports = Movie; // Exports file
