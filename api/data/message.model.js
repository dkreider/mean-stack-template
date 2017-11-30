const mongoose = require("mongoose");
const messageSchema = mongoose.Schema({

    message: String,
    messageDate: Date

});

messageSchema.index({'$**': 'text'});

mongoose.model("message", messageSchema);