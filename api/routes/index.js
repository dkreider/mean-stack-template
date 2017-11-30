/****
 * 
 * This file is used to declare the different api routes. Daniel K - Nov 29 2017
 * 
 * Declare your controller in the controllers folder and then map your routes to it here.
 * 
 */

const express = require("express");
const router = express.Router();
const ctrlMessages = require("../controllers/messages");

router
    .route("/message")
    .delete(ctrlMessages.deleteMessage)
    .get(ctrlMessages.getMessages)
    .post(ctrlMessages.saveMessage);

module.exports = router;
