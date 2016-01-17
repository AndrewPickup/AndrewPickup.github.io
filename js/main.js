function askQuestions() {


	var firstName = prompt ('What is your first name?')
	var lastName = prompt ('What is your last name?')
	var fullName = firstName + ' ' +lastName;

	$('h2').text('Hello ' + fullName);

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

	if (userAge >= 18) {

		console.log('User is an adult.');

	} else if (userAge >= 13) {

		console.log('User is a teenager.');

	} else {

		console.log('User is a child.');

	}

		if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {

			console.log ('Greetings General');

		}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

		if (faveColour == 'red' ||
		 	faveColour == 'blue' ||
		 	faveColour == 'yellow' ||
		 	faveColour == 'green') {

		$('h1').css('color',faveColour);
		

		}
}








	// when the page ahs loaded

	//make sure brackets don't cross

	//$(document).on ('ready'), function() {} - long version of function below

	// use console to check jquery code

	$(function() {  


		//When the user click the image, ask 	questions
		$('img').on('click',askQuestions);
		//Hide all sec

		$('h3').next().hide();

		// When a user clicks an h3

		$('h3').on('click', function() {

				// Hide the next element can use 'hide' or 'toggle'
				$(this).next().slideToggle(500);

		});

	});




