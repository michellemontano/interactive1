$(document).ready(function(){
	
	n = 1;

	setInterval(function(){
		$('body').append('<img src="http://i.imgur.com/WfROBmY.jpg" />');

		if (n%10 == 0) {
			$('body').append('<div class="break"></div>');			
		}
		
		n++;

	},1000);
	

});