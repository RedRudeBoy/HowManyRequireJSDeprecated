define(["ember","text!./Notifications.hbs"], function(Ember,Template) {
	var NotificationsView = Ember.View.extend({
//		templateName: 'Notifications',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return NotificationsView;
});