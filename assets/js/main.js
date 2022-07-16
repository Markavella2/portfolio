/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);


//document.getElementById('myVideo').currentTime = 1;

// var templateParams = {
//     name: 'James',
//     notes: 'Check this out!'
// };
 
// emailjs.send('service_5ozdmlf', 'template_0ia8or8', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });


// Example:
// https://stackoverflow.com/questions/44851514/restart-animated-gif-on-hover-css

// var data = {
//     service_id: 'service_5ozdmlf',
//     template_id: 'template_0ia8or8',
//     user_id: 'nyyPy_rgFNRz-blMb',
//     template_params: {
//         'username': 'Mark',
//         }
// };
 
// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
// }).done(function() {
//     alert('Your mail is sent!');
// }).fail(function(error) {
//     alert('Oops... ' + JSON.stringify(error));
// });