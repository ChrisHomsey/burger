var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//Selects all the tasty burgers
router.get("/", function(req, res) {
	burger.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.get("/api/burgers", function(req,res){
	burger.selectAll(function(data){
		res.send(data);
	})
});

//Uses the burger model (and orm.js) to create a new burger
router.post("/api/burgers/create", function(req,res) {
	console.log(req.body);
	burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(result){
		res.json({ id: result.insertId });
	});
});

//Uses the burger model (and orm.js) to update the "devoured" property of the burger selected by "id"
router.put("/api/burgers/update/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log(condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function(result){
		if (result.changedRows == 0) {
    	// If no rows were changed, then the ID must not exist, so 404
	    	return res.status(404).end();
	    } else {
	    	res.status(200).end();
	    }
	});
});

module.exports = router;