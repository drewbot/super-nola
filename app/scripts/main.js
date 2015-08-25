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


// Developer Utilities
function stringToLower(string){
	var ingredients = string;
	console.log(ingredients.toLowerCase());
}

stringToLower('SUPER NOLA ALL CAPS SCREAMIN')

function printLineLength(string) {
	var lineLengthString = string;
	lineLengthArray = lineLengthString.split('');
	console.log('Your line is ' + lineLengthArray.length + ' characters long');
}

printLineLength('Grove", which provides the characters and ')