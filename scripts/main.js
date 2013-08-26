(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require(['App'], function(App) {
			console.log('App ready!');
		});
	});
})(this);
