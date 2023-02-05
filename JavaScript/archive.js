/* For archive while learning */

// jQuery search example
var content = document.getElementById( 'content' ).value;
var finder = content.search("hello");
if (finder < 0) {
	// to do
}

// jQuery empty checker example
var pesan = $('input[name=pesan]').get(0).value;
if (pesan.length !== 0) {
	// to do
} else {
	// empty to do
}

// jQuery Replace String Example
var teks = "Shinichi Kudo";
var newTeks = teks.replace("Shinichi", "Yusaku");

// jQuery Replace value in web example
var string = "Define yours here";
$('textarea[name=input-teks]').val(string);
$('input[name=input-teks]').val(string);

// jQuery getJson Example
var apiParam = "param";
$.getJSON( "API URL Here" + apiParam, function(result) {
	// for one data without loop
	// .data meants api keys
	var jsonData = result.data;
	// to do list
	$('input[name=input-teks]').val(jsonData);
});

/* Ard */