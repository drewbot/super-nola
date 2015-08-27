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
});

$('.menu').mouseleave(function(){
	$('nav').removeClass('show');
});

// // Show Nav (Mobile)
// $('.nav-menu').click(function(){
// 	$('nav').toggleClass('show');
// 	if ($('nav').hasClass('show')) {
// 		$('button.nav-menu').text("Hide");
// 	} else {
// 		$('button.nav-menu').text("Menu");
// 	}
// })


/////////////////////////////////// Contact form
// focus in on new item input changes border color
$('.contact-name input').focusin( function(){
	$(this).css({
		"border-bottom-color" : "#c6a377"
	});
	$(this).attr('placeholder','');
	$('.name-label').toggleClass('input-focus-animate');
});
$('.contact-email input').focusin( function(){
	$(this).css({
		"border-bottom-color" : "#c6a377"
	});
	$(this).attr('placeholder','');
	$('.email-label').toggleClass('input-focus-animate');
});
$('.contact-message textarea').focusin( function(){
	$(this).css({
		"border-bottom-color" : "#c6a377"
	});
	$(this).attr('placeholder','');
	$('.message-label').toggleClass('input-focus-animate');
});

// focus out on new item input changes border color back
$('.contact-name input').focusout( function(){
	$(this).css({
		"border-bottom-color" : "#231F20"
	});
	$(this).attr('placeholder','Please tell us your name');
	$('.name-label').toggleClass('input-focus-animate');
});
$('.contact-email input').focusout( function(){
	$(this).css({
		"border-bottom-color" : "#231F20"
	});
	$(this).attr('placeholder','Please provide an email address');
	$('.email-label').toggleClass('input-focus-animate');
});
$('.contact-message textarea').focusout( function(){
	$(this).css({
		"border-bottom-color" : "#231F20"
	});
	$(this).attr('placeholder','Leave us a message');
	$('.message-label').toggleClass('input-focus-animate');
});


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

printLineLength('day with a breakfast that was high in fiber and protein, contained no refined ')