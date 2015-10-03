SC.initialize ({
	client_id: 'ce57e436973c465d7ed915b9f623d608'
});

$(function() {

	

	/* Soundcloud uses SC.get INSTEAD OF, but same basics as $.getJSON
	('/tracks') = url enpoint endpoint
	genres is one of the parameters (params)
	(tracks)  is what we'll name to store OUR data which we recieved from SoundCloud
	*/
	SC.get('/tracks', {genres: 'Jazz' }, function(tracks){
		$(tracks).each(function(index, tracks) {

			// TITLE & GENRE is a specific property of the SoundCloud API
			var bold = '<strong> ' + tracks.duration + '</strong>';
			var create = '<li>' + tracks.title + '</li>';
			$('#soundResults').append('<li>' + tracks.title + " - " + bold + '</li>');
			$('#world').append('<li>' + tracks.permalink_url + '</li>');
			$('#create').append(create);

			console.log(tracks);
			
		});
		// console.log(tracks);
	});
	SC.get('/tracks/293', function(tracks) {
		SC.oEmbed(tracks.permalink_url, document.getElementById('player'));
	});
	SC.stream('/tracks/293', function(sound) {
		$('#start').click(function(e) {
			e.preventDefault();
			sound.start();
		});
		$('#stop').click(function(e) {
			e.preventDefault();
			sound.stop();
		});
	});
});