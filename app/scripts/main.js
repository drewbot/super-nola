console.log('js loaded');

$(document).ready(function(){
	console.log('document ready');

	var cards = $('.card').toArray();

	console.log(cards);

	for (var i = 0; i < cards.length; i++) {
		console.log(cards[i]);
	}

});


// // Image replace based on screen width
// $(window).resize(function(){
//     var windowWidth = $(window).width();
//     var imgSrc = $('#image');
//     if(windowWidth <= 800){         
//         imgSrc.attr('src','image1.jpg');
//     }
//     else if(windowWidth > 800){
//         imgSrc.attr('src','image2.jpg');
//     }
// });

// Show Nav (Desktop)
$('.menu').mouseenter(function(){
	$('nav').addClass('show');
})

$('.menu').mouseleave(function(){
	$('nav').removeClass('show');
})

// // Show Nav (Mobile)
// $('.nav-menu').click(function(){
// 	$('nav').toggleClass('show');
// 	if ($('nav').hasClass('show')) {
// 		$('button.nav-menu').text("Hide");
// 	} else {
// 		$('button.nav-menu').text("Menu");
// 	}
// })



function stringToLower(string){
	var ingredients = string
	console.log(ingredients.toLowerCase());
}

var lineLengthString = "my day with a breakfast that was high in fiber and protein, contained no "
lineLengthArray = lineLengthString.split('');
console.log(lineLengthArray.length);