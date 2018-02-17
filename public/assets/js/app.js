$(function() {

	$(".devour-button").on("click", function(event) {
	var id = $(this).data("id");
	var newDevouredState = {
	  devoured: true
	};
	// Send the PUT request.
	$.ajax("/api/burgers/update/" + id, {
	  type: "PUT",
	  data: newDevouredState
	}).then(
	  function() {
	    console.log("changed devoured state to", newDevouredState);
	    // Reload the page to get the updated list
	    location.reload();
	  });
	});

	$("#burger-create-form").on("submit", function(event){
		event.preventDefault();

		var newBurger = {
	      burger_name: $("#new-burger-name").val().trim()
    	};

    
    	$.ajax("/api/burgers/create", {
	      type: "POST",
	      data: newBurger
	    }).then(
	      function() {
	        console.log("New Burger ", newBurger);
	        // Reload the page to get the updated list
	        location.reload();
	      }
	    );
	});
});