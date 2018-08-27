//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YKLtIBMAd1cMGVaZ1U3Ba9g5TRJYTsQMy&limit=30");
xhr.done(function(response) { console.log("success got data", response); });

var jiffs = response.

for (i in jiffs){
  $('.inner').append("<img src='"+jiffs[i].images.original.url"'style 'height:350px; width:350px;'/>")
}
