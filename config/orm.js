var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    console
    var queryString = "INSERT INTO " + table +
      " (" + cols + ") VALUES ('" +
    vals +"', false) ;";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

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


module.exports = orm;
