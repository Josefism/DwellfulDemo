(function( $ ) {
	$(document).ready(function() {

		// Capture each response, hide the current question, and reveal the next question
		$("#propertyIntent button").on("click", function(e) {
			e.preventDefault();
			var intentSelection = "none";
			if ($(this).hasClass("primary")) {
				intentSelection = "primary";
			}
			if ($(this).hasClass("secondary")) {
				intentSelection = "secondary";
			}
			if ($(this).hasClass("investment")) {
				intentSelection = "investment";
			}
			setFieldValue("propertyIntentField", intentSelection);
			
			// Hide the question and reveal the next
			$(this).removeClass("current");
			$("#propertyType").addClass("current");
		});
		
		// Handle navigation arrow clicks
		$("#navButtons button").on("click", function(e){
			e.preventDefault();
			var currentStep = $(".current").first();
			var targetStep;
			if ($(this).hasClass("prev") && !currentStep.hasClass("step-1")) {
				targetStep = currentStep.prev();
			} else if ($(this).hasClass("next") && !currentStep.hasClass("step-7")) {
				targetStep = currentStep.next();
			} else {
				break;
			}
			currentStep.removeClass("current");
			targetStep.addClass("current");		
		});

	// END DOCUMENT READY
	});


    // Set value of each hidden field as buttons are clicked or selections are made
	function setFieldValue(whichQuestion, whichAnswer) {
		var questionId = "#" + whichQuestion;
		$(questionId).val(whichAnswer);
	}

})( jQuery );
