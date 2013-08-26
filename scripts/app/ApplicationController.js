define(["ember"], function(Ember){
	var ApplicationController = Ember.Controller.extend({
		currentPathDidChange: function() {
			console.log('path changed: '+this.get('currentPath'));
//			var required = 'pages/'+this.get('currentPath')+'/'+this.get('currentPath')+'View';
//	"pages/HMLogin/HMLoginView",
//	"pages/HMLogin/HMDoLoginView"
//			console.log('path changed & required: '+required);
//			require([required,'App'], function(view, App) {
//				console.log('callback require');
//				console.log(App);
//				console.log(view);
//				App['HMLoginView'] = view;
//			});
//			console.log('path loaded');
		}.observes('currentPath')
	});

	return ApplicationController;
});
//http://localhost/HowManyRequireJS/#/HMLogin
//http://localhost/HowManyRequireJS/#/HMListTags/bigIcons