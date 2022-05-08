$(function(){
 	$('.cacngonngu').slideUp();
 	$('.top-ngonngu b').click(function(event) {
 		console.log('1');
 		$(this).next().slideToggle(500);
 	});

 	new WOW().init();
})  