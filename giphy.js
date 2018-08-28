// var modernizr = require("modernizr");
// console.log("hello");

function getData(){
// search box
var input = $("#searchtext").val();
//API request
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=KLtIBMAd1cMGVaZ1U3Ba9g5TRJYTsQMy&limit=30");



//promise
xhr.done(function(response) {
	console.log("success got data", response);
	var jiffs = response.data;

// loop
for (i in jiffs)
{
  $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style='height:350px; width:350px;'/>")
}
	});
}
