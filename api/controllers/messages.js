const mongoose = require("mongoose");
const message = mongoose.model("message");

module.exports.deleteMessage = function(req, res) {

    if (!req.query.messageId) {

        return res.status(400).send("No message id given.");

    }

    message.findByIdAndRemove(req.query.messageId, function(deleteError, message) {

        if (deleteError) {

            return res.status(500).send(deleteError);

        } else {

            return res.send("Successfully deleted message.");

        }

    });

}

module.exports.saveMessage = function(req, res) {

    if (!req.body.message) {

        return res.status(400).send("No message given.");
        
    }

    message.create({

        message:req.body.message,
        messageDate:new Date()

    }, function(createError, message) {

        if (createError) {

            return res.status(500).send(createError);

        } else {

            return res.send(message);

        }

    });

}

module.exports.getMessages = function(req, res) {

    message.find(function(findError, messages) {

        if (findError) {

            return res.status(500).send(findError);

        } else if (messages == null) {

            return res.send("No messages found.");

        } else {

            return res.send(messages);

        }

    });

}