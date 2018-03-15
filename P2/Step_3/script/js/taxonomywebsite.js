$(document).ready(function(){


	$('.item').click(function() {
		// var item = $(this).clone();
		// $('#grid').append(item);
		$(this).toggleClass('hide');
		$(this).next().show();
	});

});
