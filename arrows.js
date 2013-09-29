$(document).ready(function() {
    $('.offers:first').mouseenter(function() {
        $('.content').addClass('hide');
        $('.newcontent1').removeClass('hide');
		$('.offers:first').append('<img id="arrowfirst" src="images/arrow-left.png"/>');
	});
		$('.offers:first').mouseleave(function() {
			$('.content').removeClass('hide');
			$('.newcontent1').addClass('hide');
        	$('#arrowfirst').remove();
	});
	
	$('.offers:odd').mouseenter(function() {
		$('.content').addClass('hide');
        $('.newcontent2').removeClass('hide');
    	$('.offers:odd').append('<img id="arrowsecond" src="images/arrow-left.png"/>');
    });
    	$('.offers:odd').mouseleave(function() {
    		$('.content').removeClass('hide');
			$('.newcontent2').addClass('hide');
        	$('#arrowsecond').remove();
	});

	$('.offers:last').mouseenter(function() {
        $('.content').addClass('hide');
        $('.newcontent3').removeClass('hide');
        $('.offers:last').append('<img id="arrowlast" src="images/arrow-right.png"/>');
	});
		$('.offers:last').mouseleave(function() {
			$('.content').removeClass('hide');
			$('.newcontent3').addClass('hide');
        	$('#arrowlast').remove();
	});
});