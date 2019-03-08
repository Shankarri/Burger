// Importing connection
var connection = require("./connection.js");

var orm = {
// selectAll method to query all values from table
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // insert method for inserting one record into the table
  insertOne: function(table, cols, vals, cb) {
    console
    var queryString = "INSERT INTO " + table +
      " (" + cols + ") VALUES ('" + vals +"', false) ;";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // Update method for updating one record in the table
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table + " SET " +objColVals+
    " WHERE " + condition +";";
     
    
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // Delete method to remove one record from the table
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table + " WHERE " + condition;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
  

};

// Export all the orm functions 
module.exports = orm;
