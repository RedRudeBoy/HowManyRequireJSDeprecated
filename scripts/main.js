(function(root){
	require(["config.require"], function(config){
		requirejs.config(config);
		require(['Gapi/Gapi'], function (Gapi) {
//			console.log('mainjs Gapi ready');
			require(['Gapi/GapiLogin'], function(GapiLogin) {
//				console.log('mainjs GapiLogin ready');
				require(['App'], function(App) {
//					console.log('App ready!');
				});
			});
		});
	});
})(this);
