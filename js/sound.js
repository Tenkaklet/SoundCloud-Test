SC.initialize({
  client_id: 'ce57e436973c465d7ed915b9f623d608'
});

/*
To recieve specific data type [something] in the SC.get() <-- function.

THEN passing and argument to "control" or "store" what is gotten from SC.Get() in the function 
in this case using parameter "tracks2/anything...!!!!!". 
*/



$(document).ready(function() {

	// Soundcloud own way of $.get.
	SC.get('/users',
	 {},

  function geResults1 (userInfo) {
    $(userInfo).each(function(index, value) {

    	// variable to store the users unique ID.
    	var soundId = userInfo[0].id;
    	$("#userId").append('<li>' + soundId + '</li>');

    	// a variable that stores their country of origin
    	var soundCunt = userInfo[0].country;
    	$('#world').append("<li>" + soundCunt + "</li>");
      


      //console log of the userInfo array (that means the "directory")
      console.log(userInfo[0]);
      console.log(userInfo[0].permalink);
    });
  });
  	// streaming the tracks
  	// SC.stream("/tracks/293", function(sound) {
  	// 	sound.play();
  	// });
    

});

/*

  // A simple way to recieve JSON data of a specific itteration of a property of an object
  $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function (data) {
    var myStuff = data.Search;
    $.each(myStuff, function(index, value) {
      console.log(value.Title);
    });
    console.log(myStuff);

  });
*/