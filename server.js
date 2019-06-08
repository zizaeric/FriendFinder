var express = require("express");
var bodyParser = require("body-parser");
 
var app = express();

var PORT = process.env.PORT || 8080;

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-forom-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

// parse various custom JSON types as JSON
app.use(bodyParser.json({
    type: "application/*+json"
}));

// parse some custom thing intoa Buffer
app.use(bodyParser.raw({
    type: "application/vnd.custom-type"
}));

// parse an HTML body into a string
app.use(bodyParser.text({
    type: "text/html"
}));

app.listen(PORT, function() {
    console.log("App listerning on PORT: " + PORT);
});

