define(["ember"], function(Ember){
	var Router = Ember.Router.extend({});
	Router.map(function() {
		this.resource('HowManys', function() {
									//HowManysIndex
			this.route('List');				//HowManysList - HMList
//			this.route('ListFiltred', { path: '/f/:f' });	//HowManysList - HMList
			this.route('BigIcons');				//HowManysBigIcons - HMListTagsBigIcons
			this.route('WindRose');				//HowManysWindRose
			this.route('Users');
			this.route('History');
			
		});
//		this.route('HowManyNew', { path: '/HowMany/' });	//new HMCRUD - HowManyNew
//		this.resource('HowMany', { path: '/HowMany/:hm_id' }, function() {
		this.resource('HowMany', function() {
									//HowManyIndex - HMView
			this.route('edit');				//HowManyEdit - HMCRUD
//			this.route('edit', { path: "edit/:hm_id" });				//HowManyEdit - HMCRUD
			this.route('done');				//HowManyDone - HMDone
			this.route('planner');
			this.route('planning');
		});
		this.resource('Wizard', function () {
			this.route('Welcome');
			this.route('BasicInfo');
			this.route('Body');
			this.route('Mind');
			this.route('Work');
			this.route('Vice');
			this.route('Finish');
		});
		this.route('Login');
		this.route('Notifications');
		this.route('Report');
		this.route('Configuration');
		this.route('Credits');
	});
	return Router;
/*
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
		this.route('Login');
		this.route('Planner');
		this.route('Notifications');
		this.route('Report');
		this.route('Wizard');
		this.route('Configuration');
		this.route('Credits');
	});
*/
});
