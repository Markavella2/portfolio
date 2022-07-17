/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

//const { EmailJSResponseStatus } = require("@emailjs/browser");

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

//Email stuff

const form = document.getElementById("myForm");

(function (){
	emailjs.init("nyyPy_rgFNRz-blMb");
})();

function sendMail(){
	let tempParams = {
		from_name: document.getElementById("fromName").value,
		to_name: document.getElementById("toName").value,
		message: document.getElementById("msg").value,
		
	};

	emailjs
		.send('service_5ozdmlf', 'template_0ia8or8', tempParams)
		.then(function (res) {
			console.log("Success", res.status);
		
		});
}
document.querySelector('#btn').addEventListener("click", function(e){
	sendMail();
	e.preventDefault();
	alert("Your email has been sent. Thank you!");
	form.reset();
});



//document.getElementById('myVideo').currentTime = 1;


// Example:
// https://stackoverflow.com/questions/44851514/restart-animated-gif-on-hover-css

