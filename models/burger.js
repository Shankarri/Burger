// Importing all the ORM functions
var orm = require("../config/orm.js");

// get the values from thr controller and pass into ORM functions
var burger = {
  //redirect method for select all 
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    //redirect method for create new record
    create: function(cols, vals, cb) {
          orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },

    //redirect method for updating a exsisting record
    update: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },

    //redirect method for deleting a record
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller 
  module.exports = burger;