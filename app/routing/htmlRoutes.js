var path = require("path");

// put all routes in the exports module so that it can be used in server.js
module.exports = function (app) {

    // deliver the file survey.html when user goes to url /survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // deliver the home.html file when user goes to the app
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}