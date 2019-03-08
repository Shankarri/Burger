// Javascript file to handleall the button clicks
$(function () {

  //----- When user clicks on Devour button ----------//
  $(".devour-btn").on("click", function (event) {
    // get the id attribute from the button
    var id = $(this).data("id");

    // Send the PUT request with id in the URL
    $.ajax("/api/burger/" + id, {
      type: "PUT",
    }).then(
      function (result) {
        console.log("Devour result", result);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //-----------------------------------------------------//

  //----- When user clicks submit button on add burger form ----------//
  $("#add-burger").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // get the value from input text and store it in obj
    var newBurger = {
      name: $("#burger_name").val().trim(),
    };

    // Send the POST request along with user input
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Added new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //-----------------------------------------------------//

  //----- When user clicks trash button ----------//

  $(".remove-btn").on("click", function (event) {
  // get the id attribute from the button
    var id = $(this).data("id");
    console.log(id);

    // Send the DELETE request with the id
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("Trashed the burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //-----------------------------------------------------//
});
