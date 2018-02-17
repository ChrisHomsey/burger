var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

//Express-Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Sets up the routing from the burgers_controller.js file
var burgerRoutes = require("./controllers/burgers_controller.js");
app.use("/", burgerRoutes);


app.listen(PORT, function(){
	console.log("App listening on port " + PORT);
})