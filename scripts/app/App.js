define([
	"AppInit",
	"ember",
	"jquery",
	"bootstrap"
], function(AppInit, Ember,$,b){
//	var app_name = config.app_name || "App";
//	root[app_name] = App = Ember.Application.create(App);
	window['App'] = App = Ember.Application.create(AppInit);
	return App;
});