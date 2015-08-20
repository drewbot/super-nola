console.log('js loaded');

$(document).ready(function(){
	console.log('document ready');
	var cards = $('.card').toArray();
	console.log(cards);
	for (var i = 0; i < cards.length; i++) {
		console.log(cards[i]);
	}
});
