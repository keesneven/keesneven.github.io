$(document).ready(function () {
	$('.textblock').hide();
	$('.overlay').hide();


	 $('.circle').click(function (event) {
	 	$('.textblock').hide();
	 	$('.overlay').fadeIn('slow');
	 	$('.textblock#' + event.currentTarget.id).fadeIn('slow');
	 	// $('.circle-wrapper').hide();
	 });

	 $('.x').click(function () {
	 	$('.overlay').fadeOut('slow');
	 	$('.textblock').fadeOut('slow');
	 	// $('.circle-wrapper').show();
	 })
});
