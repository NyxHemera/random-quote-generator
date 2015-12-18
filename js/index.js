$( document ).ready(function() {
	var init = Math.floor(Math.random() * 10);
	$('#quote').text(getQuote(init));
	$('#title-author').text(getTitle(init));
	
	function getQuote(rand) {

		var quotes = ['"You forget what you want to remember and you remember what you want to forget." - The Man', 
						  '"No man, for any considerable period, can wear one face to himself and another to the multitude, without finally getting bewildered as to which may be the true."', 
						  '"Nowadays people know the price of everything and the value of nothing." - Lord Henry', 
						  '"Nothing is so painful to the human mind as a great and sudden change."', 
						  '"Experience as well as common sense indicated that the most reliable method of avoiding self-extinction was not to equip oneself with the means to accomplish it in the first place."', 
						  '"If he wants to be an asshole, it\'s a free country. Millions before him have made the same life choice."', 
						  '"It was the mark of a barbarian to destroy something one could not understand."', 
						  '"You will be required to do wrong no matter where you go. It is the basic condition of life, to be required to violate your own identity. At some time, every creature which lives must do so. It is the ultimate shadow, the defeat of creation; this is the curse at work, the curse that feeds on all life. Everywhere in the universe."', 
						  '"I never felt like that before. Maybe it could be depression, like you get. I can understand how you suffer now when you\'re depressed; I always thought you liked it and I thought you could have snapped yourself out any time, if not alone then by means of the mood organ. But when you get that depressed you don\'t care. Apathy, because you\'ve lost a sense of worth. It doesn\'t matter whether you feel better because you have no worth."', 
						  '"Violence is the last refuge of the incompetent." - Salvor Hardin'];

		return quotes[rand];

	}

	function getTitle(rand) {

		var titles = ['Cormac McCarthy - The Road', 
						  'Nathaniel Hawthorne - The Scarlet Letter', 
						  'Oscar Wilde - The Picture of Dorian Gray', 
						  'Mary Shelley - Frankenstein', 
						  'Iain Banks - Consider Phlebas', 
						  'Margaret Atwood - Oryx and Crake', 
						  'Arthur C. Clarke - 2001', 
						  'Philip K. Dick - Do Androids Dream of Electric Sheep', 
						  'Philip K. Dick - Do Androids Dream of Electric Sheep', 
						  'Issac Asimov - Foundation'];
		return titles[rand];
	}


	$("#new-button").on( "click", function() {
		var rand = Math.floor(Math.random() * 10);
		$('#quote').text(getQuote(rand));
		$('#title-author').text(getTitle(rand));
	});
	
});