$(document).ready(function() {
	
    // Social Media Collapse
	$('#sm-close').click(function(){
		$('.s-media').addClass('sm-collapse');
        $('#sm-open').delay(300).css('right', '0');
	});

    $('#sm-open').click(function(){
        $('#sm-open').css('right', '-60px');
        $('.s-media').removeClass('sm-collapse');
        
    });

    // END Click Function
});// END DOCUMENT.Ready