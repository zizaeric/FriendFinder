var express = require("express");
var bodyParser = require("body-parser");
 
var app = express();

var PORT = process.env.PORT || 8080;

// create application/x-www-forom-urlencoded parser
app.use(bodyParser.urlencoded({extended: true}));

// parse various custom JSON types as JSON
app.use(bodyParser.json({
    type: "application/*+json"
}));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({
    type: "application/vnd.custom-type"
}));

// parse an HTML body into a string
app.use(bodyParser.text({
    type: "text/html"
}));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listerning on PORT: " + PORT);
});

