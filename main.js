// Only activates when clicking
$(document).click(function(){

	// Will disappear in one second and reappear in one second
	$("#disappear").hide(1000);
	$("#disappear").show(1000);

	// Will fade in one second and then gradually come back in one second
	$("#fading").fadeOut(1000);
	$("#fading").fadeIn(1000);

	// Will slide out and into existence in one second each
	$("#sliding").slideUp(1000);
	$("#sliding").slideDown(1000);

	// Will decrease in opacity in 2 seconds
	$("#translucent").animate({
		opacity: 0.5,
	}, 2000);

	// Will slide 300px to the right in 2 seconds
	$("#move").animate({
		marginLeft: "+=300px",
	}, 2000);

	// Will change to red when mouse hovers over it
	$("#colorHover").hover(function(){
		$(this).css("color", "red")
	});

	// Will shrink to 20px
	$("#shrink").animate({
		"font-size": "20px",
	});

	// Will change to blue when clicked
	$("#clickColor").click(function(){
		$("#clickColor").css("color", "blue")
	});

	// Will get lighter and go to the right by 100px in two seconds
	$("#fadeSlide").animate({
		marginLeft: "+=100px",
		opacity: 0.25,
	}, 2000);

	// Will change to yellow and shrink to 30px
	$("#colorShrink").css("color", "yellow");
	$("#colorShrink").animate({
		"font-size": "20px",
	});	

});