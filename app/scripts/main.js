console.log('js loaded');

$(document).ready(function(){
	console.log('document ready');

	var cards = $('.card').toArray();

	console.log(cards);

	// for (var i = 0; i < cards.length; i++) {
	// 	console.log(cards[i]);

	// }

	function appendToCard(card) {
		// $('div.card').text('shiza');
		// card.text('shiza');
		console.log(card);
		return card;
	}

	cards.forEach(appendToCard);

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
