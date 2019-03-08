// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

     
    $(".devour-btn").on("click", function(event) {
      var id = $(this).data("id");
    //   var devoured = $(this).data("isdevoured");
        
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
      }).then(
        function(result) {
          console.log("result", result);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#add-burger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger_name").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new Burger");
          location.reload();
        }
      );
    });
  
    $(".remove-btn").on("click", function(event) {
      var id = $(this).data("id");
      console.log(id);
      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Trashed the burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  