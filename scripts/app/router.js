define(["ember"], function(Ember){
	var Router = Ember.Router.extend({});
	
	Router.map(function() {
		this.resource('HMListTags', function() {
			this.route('default', { path: '/' });
			this.route('bigIcons');
			this.route('windRose');
			this.route('users');
			this.route('history');
		});
		this.route('HMList');
		this.route('HMView');
		this.route('HMCRUD');
		this.route('HMDone');
		this.route('HMLogin');
		this.route('HMPlanner');
		this.route('HMNotifications');
		this.route('HMReport');
		this.route('HMWizard');
		this.route('HMConfiguration');
		this.route('HMCredits');
	});
	return Router;
});
