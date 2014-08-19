$(document).ready(function(){
	var userId;
	//initialize soundcloud API with client ID
	SC.initialize({
		client_id: "2fb00e038d2c0bf801c77c8ed77588c5",
   		//redirect_uri: "http://example.com/callback.html",
	});	

    var userUrl = 'https://soundcloud.com/alphexandb-ripmusic';
	$.get('http://api.soundcloud.com/resolve.json?url=' + userUrl + '&client_id=2fb00e038d2c0bf801c77c8ed77588c5', 
  		function (result) {
    		//after we resolve the username, we grab all the tacks of the user and display the first 3
    		userId = result.id;
    		console.log(userId);
    		SC.get("/users/" + userId + "/tracks" , {limit:3}, function(tracks){
    			var track = tracks[0];
    			SC.oEmbed(track.uri,{maxheight: 100}, document.getElementById("displayMusic"));
			});
  		}
  	);	
});