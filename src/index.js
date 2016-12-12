'use strict';

console.log($)

// function that formating the text
function formater(text) {
	var enter = /\r\n|\r|\n/g;
	var spaces = /\s+/g;
	var text;
	
	text = text.toLowerCase();
  text = text.replace(enter," ");
	text = text.trim();
	text = text.replace(spaces," ");
	return text;
}

// function for transfer text from one area to the other area using the function on the text
function transferText() {
	var notFormattedText, formattedText;
	notFormattedText = $("textarea.message-field").val();
	formattedText = formater(notFormattedText);
	$("output.message-formatted").html(formattedText);
}

// function events on lost the focus
$("textarea.message-field").blur(function () {
	transferText();
});

// function events on keydown
$("textarea.message-field").on("input", function () {
	transferText();
});