'use strict';

console.log('js loaded');

// Store true if device is touch
// store false is device is not touch
var isTouchDevice = 'ontouchstart' in document.documentElement;

// maintain same column height so they don't stagger when one is taller
// Get the actual height after screen and columns' content shrinks
function getActualHeight(){
	// set the product columns' height back to auto
	$('.card').find('div').height('auto');
	// get the highest div height of the columns
	var highestCol = Math.max(
		$('.caw').height(),
		$('.pfp').height(),
		$('.bca').height(),
		$('.pvh').height()
	);
	return highestCol;
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Begin reusable function
// console.log($('.location-list > li'));
// console.log(Array.isArray($('.location-list > li')));
//
// if( (typeof $('.location-list > li') === "object") && ($('.location-list > li') !== null) ) {
//   console.log('is an object');
// } else {
// 	console.log('is NOT an object');
// };
//
// function findWithAttr(array, attr, value) {
//     for(var i = 0; i < array.length; i += 1) {
//         if(array[i][attr] === value) {
//             return i;
//         }
//     }
// }
//
// var arrayOfElements = new Array();
//
//
// function getElementHeight(selector){
// 	var elementObject = $(selector);
// 	console.log(elementObject);
// 	$(selector).height('auto');
// 	var elementArray = $.map($(elementObject), function(value, index) {
// 								return [value];
// 							});
// 	console.log(elementArray);
// 	function arrayOfHeights() {
// 		for(var i = 0; i < elementArray.length; i += 1) {
// 			var num = i + 1;
// 			return $(selector + ':nth-of-type(' + num + ')').height();
// 		}
// 	}
// 	var highestCol = Math.max(arrayOfHeights());
// 	return highestCol;
// }
//
// getElementHeight($('.location-list > li'));

// var max = Math.max(...array);
// console.log(max);
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function getLiHeight(){
	// set the product columns' height back to auto
	$('.location-list > li').height('auto');
	// get the highest div height of the columns
	var highestCol = Math.max(
		$('.location-list > li:nth-of-type(1)').height(),
		$('.location-list > li:nth-of-type(2)').height(),
		$('.location-list > li:nth-of-type(3)').height(),
		$('.location-list > li:nth-of-type(4)').height(),
		$('.location-list > li:nth-of-type(5)').height(),
		$('.location-list > li:nth-of-type(6)').height(),
		$('.location-list > li:nth-of-type(7)').height(),
		$('.location-list > li:nth-of-type(8)').height(),
		$('.location-list > li:nth-of-type(9)').height(),
		$('.location-list > li:nth-of-type(10)').height(),
		$('.location-list > li:nth-of-type(11)').height(),
		$('.location-list > li:nth-of-type(12)').height()
	);
	console.log(highestCol);
	return highestCol;
}
// set all column heights to the tallest column's height
$('.card').find('div').height(getActualHeight());
$('.location-list > li').height(getLiHeight());

/////////////////////////////////////////// Page Init
$( document ).on( 'pageinit', function( event ) {
	console.log('page init');
	// set all column heights to the tallest column's height
  $('.card').find('div').height(getActualHeight());
	$('.location-list > li').height(getLiHeight());
});

/////////////////////////////////////////// Window loaded
$( window ).load(function() {
	console.log('window loaded');
	// set all column heights to the tallest column's height
	$('.card').find('div').height(getActualHeight());
	$('.location-list > li').height(getLiHeight());
});

/////////////////////////////////////////// Document Ready
$(document).ready(function(){
	console.log('document ready');

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
		$('nav').removeClass('hide');
	});

	$('.menu').mouseleave(function(){
		$('nav').removeClass('show');
		$('nav').addClass('hide');
	});

	// Store true if device is touch
	// store false is device is not touch
	var isTouchDevice = 'ontouchstart' in document.documentElement;

	// Show Nav (Mobile)
	$('.nav-menu').click(function(){
		if (window.navigator.msMaxTouchPoints || isTouchDevice) {
			if ($('nav').hasClass('hide')) {
				$('button.nav-menu').text('Hide');
				$('nav').addClass('show');
				$('nav').removeClass('hide');
			} else {
				$('button.nav-menu').text('Menu');
				$('nav').removeClass('show');
				$('nav').addClass('hide');
			}
		}
	});

	/////////////////////////////////// Scroll To Section
	// (event.preventDefault() stops the flicker on click)
	$( 'a[href|="#intro"]' ).click(function(event) {
		event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#intro').offset().top
    }, 900);
	});

	$( 'a[href|="#about"]' ).click(function(event) {
		event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 900);
	});

	$( 'a[href|="#product"]').click(function(event) {
		event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#product').offset().top
    }, 900);
	});

	$( 'a[href|="#shop"]' ).click(function(event) {
		event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#shop').offset().top
    }, 900);
	});

	$( 'a[href|="#contact"]' ).click(function(event) {
		event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 900);
	});

	/////////////////////////////////// Product

	// Open product details modal
	$('.caw').click(function(){
		$('.product-details').addClass('show');
		$('.caw-details').addClass('show');
		$('body').css('overflow-y', 'hidden');
	});

	$('.pfp').click(function(){
		$('.product-details').addClass('show');
		$('.pfp-details').addClass('show');
		$('body').css('overflow-y', 'hidden');
	});

	$('.bca').click(function(){
		$('.product-details').addClass('show');
		$('.bca-details').addClass('show');
		$('body').css('overflow-y', 'hidden');
	});

	$('.pvh').click(function(){
		$('.product-details').addClass('show');
		$('.pvh-details').addClass('show');
		$('body').css('overflow-y', 'hidden');
	});

	// Close product details modal with "x"
	$('.close').click(function(){
		$('.product-details').removeClass('show');
		$('.product-details').find('.row').removeClass('show');
		$('body').css('overflow-y', 'auto');
	});
	// Close product details modal by clicking the background
	$('.product-details').click(function(){
		$('.product-details').removeClass('show');
		$('.product-details').find('.row').removeClass('show');
		$('body').css('overflow-y', 'auto');
	});
	// Prevent clicking the container from triggering close
	$('.product-details').find('.row').click(function(event) {
	  event.stopPropagation();
	});

	/////////////////////////////////// Locations List
	// $('#showLocations').click( function() {
	// 	$('#locationList').slideToggle();
	// });

	/////////////////////////////////// Contact form
	// focus in on new item input changes border color
	$('.contact-name input').focusin( function(){
		$(this).css({
			'border-bottom-color' : '#c6a377'
		});
		$(this).attr('placeholder','');
		$('.name-label').toggleClass('input-focus-animate');
	});
	$('.contact-email input').focusin( function(){
		$(this).css({
			'border-bottom-color' : '#c6a377'
		});
		$(this).attr('placeholder','');
		$('.email-label').toggleClass('input-focus-animate');
	});
	$('.contact-message textarea').focusin( function(){
		$(this).css({
			'border-bottom-color' : '#c6a377'
		});
		$(this).attr('placeholder','');
		$('.message-label').toggleClass('input-focus-animate');
	});

	// focus out on new item input changes border color back
	$('.contact-name input').focusout( function(){
		$(this).css({
			'border-bottom-color' : '#231F20'
		});
		$(this).attr('placeholder','Please tell us your name');
		$('.name-label').toggleClass('input-focus-animate');
	});
	$('.contact-email input').focusout( function(){
		$(this).css({
			'border-bottom-color' : '#231F20'
		});
		$(this).attr('placeholder','Please provide an email address');
		$('.email-label').toggleClass('input-focus-animate');
	});
	$('.contact-message textarea').focusout( function(){
		$(this).css({
			'border-bottom-color' : '#231F20'
		});
		$(this).attr('placeholder','Leave us a message');
		$('.message-label').toggleClass('input-focus-animate');
	});

}); // End Document Ready

// Window resize
$(window).resize(function () {
	console.log('window resized');

	// set all column heights to the tallest column's height
	// maintain same column height so they don't stagger when one is taller
	$('.card').find('div').height(getActualHeight());
	$('.location-list > li').height(getLiHeight());
});


// Developer Utilities
function stringToLower(string){
	var ingredients = string;
	console.log(ingredients.toLowerCase());
}

// stringToLower('SUPER NOLA ALL CAPS');

function printLineLength(string) {
	var lineLengthString = string;
	var lineLengthArray = lineLengthString.split('');
	console.log('Your line is ' + lineLengthArray.length + ' characters long');
}

// printLineLength('day with a breakfast that was high in fiber and protein, contained no refined ');
