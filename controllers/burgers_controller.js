var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// method for / route connecting with db method for select all
router.get("/", function(req, res) {
    burger.all(function(data) {
     
      var hbsObject = {
        burgers: data
      };
      // after we get the response, render the values in index handlebars file
      res.render("index", hbsObject);
    });
  });
  
 //add a new burger into the database.
  router.post("/api/burger", function(req, res) {
    console.log("req.body.name",req.body.name);

    // pass the table column name and values for the column to insert record
    burger.create("burger_name , devoured",
      req.body.name , function(result) {
      // Send back the ID of the new burger as reponse
      res.json({ id: result.insertId });
    });
  });
  
  // Method to Update the burger table devoured value to true if devour button is selected 
  router.put("/api/burger/:id", function(req, res) {

    //get the id from the url
    var condition = "id = " + req.params.id;
  
    burger.update("devoured = true", condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        // Send changed Rows as reponse
        res.json(result.changedRows);
      }
    });
  });


  // Delete burger method to remove the selected burger from db
  router.delete("/api/burger/:id", function(req, res) {
    //get the id from the url
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
         // Send changed Rows as reponse
        res.json(result.changedRows);
      }
    });
  });
  
  
//Code

module.exports = router;