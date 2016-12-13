'use strict';

console.log($)

// function that formating the text
function formater(text) {
	var enter = /\r\n|\r|\n/g, spaces = /\s+/g;
	
	text = text.toLowerCase();
	text = text.replace(enter, " ");
	text = text.trim();
	text = text.replace(spaces, " ");
	
	return text;
}

// function for transfer text from one area to the other area using the function on the text
function transferText() {
	var notFormattedText, formattedText;
	notFormattedText = $("textarea.message-field").val();
	formattedText = formater(notFormattedText);
	$("output.message-formatted").html(formattedText);
}

// function events on input
$("textarea.message-field").on("input", function () {
	transferText();
});