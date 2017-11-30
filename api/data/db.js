const mongoose = require("mongoose");
const config = require("../config");
const mongoDBServerUrl = config.mongoDBServerUrl;

mongoose.connect(mongoDBServerUrl);

mongoose.connection.on("connected", function() {

    console.log("Connected to " + mongoDBServerUrl);

});

mongoose.connection.on("error", function(error) {

    console.log("Error connecting to database: " + error);

});

mongoose.connection.on("disconnected", function() {

    console.log("Disconnected from database.");

});

require("./message.model");