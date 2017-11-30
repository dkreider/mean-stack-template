require("./api/data/db.js");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./api/routes");
const app = express();

app.set("port", 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(function(req, res, next) {
    
    console.log(req.method, req.url);
    next();

});

app.use("/api", routes);
app.all("*", function(req, res) {

    res
    .status(404)
    .send();

});

app.listen(app.get("port"), function() {

    console.log("Listening on port " + app.get("port"));

});