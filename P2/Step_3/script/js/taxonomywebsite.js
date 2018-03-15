$(document).ready(function(){


	$('.item').click(function() {
		// var item = $(this).clone();
		// $('#grid').append(item);
		$(this).hide();
		$(this).next().show();
	});

});
