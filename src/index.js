'use strict';

console.log($)

// function that formating the text
function formater(text) {
	var text, lower;
	var arr = [];
	var i = 0;
	var result;

	lower = text.toLowerCase();
	arr[i] = lower;
	console.log(arr[i]);
	i++;

	result = arr;
	return result;
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
$("textarea.message-field").keydown(function () {
	transferText();
});