$(document).ready(function() {
    $('.offers:first').mouseenter(function() {
        $('.content').html('<h1 class="product"><a class="productlink" href="#">Basecamp</a> is the project management tool you wish you had on your last project.</h1><br><h2 class="productdesc">Are you still managing projects with email? Are you still using Excel for your to-do lists? It’s time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.</h2>');
		$('.offers:first').append('<img id="arrowfirst" src="images/arrow-left.png"/>');
	});
		$('.offers:first').mouseleave(function() {
        	$('#arrowfirst').remove();
	});
	
	$('.offers:odd').mouseenter(function() {
        $('.content').html('<h1 class="product"><a class="productlink" href="#">Highrise</a> remembers the important things about people you’d normally forget.</h1><br><h2 class="productdesc">Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.</h2>');
    	$('.offers:odd').append('<img id="arrowsecond" src="images/arrow-left.png"/>');
    });
    	$('.offers:odd').mouseleave(function() {
        	$('#arrowsecond').remove();
	});

	$('.offers:last').mouseenter(function() {
        $('.content').html('<h1 class="product">From near or far, <a class="productlink" href="#">Campfire</a> helps teams work together over the web in real-time.</h1><br><h2 class="productdesc"> Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It’s game changing. We couldn’t run our own business without Campfire.</h2>');
        $('.offers:last').append('<img id="arrowlast" src="images/arrow-right.png"/>');
	});
		$('.offers:last').mouseleave(function() {
        	$('#arrowlast').remove();
	});
});