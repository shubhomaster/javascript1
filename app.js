window.navigator.geolocation.getCurrentPosition(function(data){
	console.log(data);

	let latitude = data.coords.latitude;
	let longitude = data.coords.longitude;

	alert(latitude);
	alert(longitude);

	$.ajax({
		url: 'https://api.opencagedata.com/geocode/v1/json?q=22.6243362+88.4414199&key=57304f909fa9414cb760bb8a43642e6e',
		success:function(data){
			console.log(data);
			let neighbourhood = data.results[0].components.neighbourhood;
			let state = data.results[0].components.state;
			let country = data.results[0].components.country;
			let continent = data.results[0].components.continent;

			//$('#result').text(`${neighbourhood},${state},${country},${continent}`);
			$('#LOCATION').append('<div class="container"><h1 class="display-4">Your Current Location: </h1><p> <center> <strong>'+ neighbourhood +', '+ state +', '+ country + ', '+ continent +'</strong> </center></p></div>');
			
			$.ajax({
			'url':'https://api.unsplash.com/search/photos?client_id=4klC8mTWmIm_C-pICV3W7Lwr-5hZyk4EuAxhh_E0aNQ&query='+ country +'',
			success:function(data){
				var results = data.results;
						
				$.each( results, function( key, value ) {
	 					
	 				if(key===8){
	 					return false;
	 				}
	 			image= value.urls.regular;
				console.log(image);
				$('#gallery').append(' <a href="'+image+'" style="height:200px; width:300px;" class="image"><img src="'+image+'" style="height:200px; width:300px;" alt=""></a>')	 					
	 				//$('#img').append('<div class="col-md-4 mt-2"><div class="card mt-2" style="width: 18rem;"><img class="card-img-top img-thumbnail" style="height:200px; width:300px;" src="'+ image +'" ></div></div>');
	 						
	 			});

			},
			error:function(){
				alert:("Error Occurred!");
			}
	});
		},

		error:function(){
			alert("Error");
		}
	})
});




			//'url':'https://api.unsplash.com/search/photos?client_id=4klC8mTWmIm_C-pICV3W7Lwr-5hZyk4EuAxhh_E0aNQ&query='+ country +'',
			//success:function(data){
			//	var results = data.results;