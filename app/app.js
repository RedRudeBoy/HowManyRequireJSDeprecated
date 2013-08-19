/**
 * App
**/
var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});


/**
 * Router
**/
App.Router.map(function() {
//	this.route('helloWorld', {path: '/'});
	this.resource('HMListTags', function() {
		this.route('default', { path: '/' });
//		this.route('default', { path: '/' });
		this.route('bigIcons');
		this.route('windRose');
		this.route('users');
		this.route('history');
	});
	this.route('HMList');
	this.route('HMView');
	this.route('HMCRUD');
	this.route('HMDone');
	this.route('login');
});

App.IndexRoute = Ember.Route.extend({
	redirect: function() {
		App.log('IndexRoute redirect, authorized?');
		if(!Ember.isNone(App.gapi) && !Ember.isNone(App.gapi.isAuthorized) && App.gapi.isAuthorized) {
			App.log(App.gapi.isAuthorized);
			this.transitionTo('HMList');
		} else {
			App.log('goTo login');
			this.transitionTo('login');
		}
	}
//	init: function() {this._super();},			//called when objects are instantiated
//	activate: function() {},				//This hook is executed when the router enters the route for the first time. It is not executed when the model for the route changes.
//	setupController: function(controller, model) {},
//	afterModel: function(posts, transition) {},
//	beforeModel: function(transition) {},
//	renderTemplate: function(controller, model) {},		//By default, it renders the route's template, configured with the controller for the route.
//	deactivate: function() {},
});

/**
 * Models
**/



/***************\
 *    Pages    *
 * Routing
 * Controller
 * Views
\***************/

		//HMLogin
App.LoginRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		console.log('setupController LoginRoute');
//		console.log(controller);
//		console.log(model);
	}
});

App.LoginController = Ember.ObjectController.extend({
	soundVolume: 1
});

App.DoLoginView = Ember.View.extend({
//	click: handleAuthClick
	click: function() {
		App.gapi.authorize(false);
	},
	didInsertElement: function() {
		Ember.run.scheduleOnce('afterRender', this, 'viewRendered');
	},
	viewRendered: function() {
		$('#tuEstahBien').tooltip({'html': true,'title':'<img src="http://stream1.gifsoup.com/view1/4802687/chiquillo-tu-estah-bien-o.gif" />'});
		$('#esBuenaPaTi').tooltip({'html': true,'title':'<img src="http://stream1.gifsoup.com/view2/4802699/es-buena-pa-ti-pa-tu-cuerpo-pa-t%C3%B3h-o.gif" />'});
	}
});

		//HMListTags
//App.HMListTagsRoutes
App.HMListTagsRoute = Ember.Route.extend({
	activate: function() {
		App.log('HMListTagsRoute activate');
	}
});
App.HMListTagsDefaultRoute = Ember.Route.extend({
	redirect: function() {
		App.log('HMListTagsDefaultRoute redirect to BigIcons');
		this.transitionTo('HMList');
	}
});
App.HMListTagsBigIconsRoute = Ember.Route.extend({
	activate: function() {
		App.log('HMListTagsBigIconsRoute activate');
	}
});
App.HMListTagsWindRoseRoute = Ember.Route.extend({
	activate: function() {
		App.log('HMListTagsWindRoseRoute activate');
	}
});
App.HMListTagsUsersRoute = Ember.Route.extend({
	activate: function() {
		App.log('HMListTagsUsersRoute activate');
	}
});
App.HMListTagsHistoryRoute = Ember.Route.extend({
	activate: function() {
		App.log('HMListTagsHistoryRoute activate');
	}
});

//App.HMListTagsViews
App.HMListTagsToolbarView = Ember.View.extend({
	templateName: 'HMListTagsToolbar'
});
App.HMListTagsBigIconsView = Ember.View.extend({
	templateName: 'HMListTagsBigIcons'
});
App.HMListTagsWindRoseView = Ember.View.extend({
	templateName: 'HMListTagsWindRose'
});
App.HMListTagsUsersView = Ember.View.extend({
	templateName: 'HMListTagsUsers'
});
App.HMListTagsHistoryView = Ember.View.extend({
	templateName: 'HMListTagsHistory'
});

		//HMList
App.HMListRoute = Ember.Route.extend({
	activate: function() {
		App.log('HMListRoute activate');
	}
});
App.HMListView = Ember.View.extend({
	templateName: 'HMList'
});

		//HMView
App.HMViewRoute = Ember.Route.extend({
	activate: function() {
		App.log('HMViewRoute activate');
	}
});
App.HMViewView = Ember.View.extend({
	templateName: 'HMView'
});
App.HMViewNowBtnView = Ember.View.extend({
	click: function() {
		$('#HMViewWhen,#HMViewDuration').toggle();
		$("#"+this.elementId).children('.btn').toggleClass('active');
	}
});

		//HMCRUD
App.HMCRUDRoute = Ember.Route.extend({
	activate: function() {
		App.log('HMViewRoute activate');
	}
});
App.HMCRUDView = Ember.View.extend({
	templateName: 'HMCRUD'
});

		//HMDone
App.HMDoneRoute = Ember.Route.extend({
	activate: function() {
		App.log('HMDoneRoute activate');
	}
});
App.HMDoneView = Ember.View.extend({
	templateName: 'HMDone'
});
//HelloWorld
//App.hello = "Hello World (by ember!)";


/***************\
 *    Utils    *
\***************/

App.log = function(msg) {
//	$("#info-panel-long").append('<pre>'+msg+'</pre>');
//	Handlebars.logger.log(msg);
	if ( typeof console == 'object' && typeof console.log == 'function') {
		console.log( msg );
	}
}

//window.App = new Object();
//App.Models = new Object();
//App.Collections = new Object();
//App.Views = new Object();
App.Utils = new Object();


_.extend(App, Backbone.Events);

//Basic Object with extend feature & initialize function
App.Util = function(options) {
	_.extend(this,options);
	this.initialize.apply(this, arguments);
};
App.Util.extend = Backbone.Model.extend;
App.Utils.GAPI = App.Util.extend({
	toString: function() {return 'GAPI'},
	clientId: '',
	apiKey2: '',
	scopes: [
		'https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.readonly',
		'https://www.googleapis.com/auth/tasks','https://www.googleapis.com/auth/tasks.readonly',
		'https://www.googleapis.com/auth/plus.me',
		'https://www.googleapis.com/auth/urlshortener'
	],
	isAuthorized: false,
	initialize: function () {
		if(typeof gapi == 'undefined') {
			console.error(this+': gapi undefined!');
		}
		if(typeof gapi.client == 'undefined') {
			console.error(this+': gapi.client undefined!');
		}
		App.log(this+': authorize');
		gapi.client.setApiKey(this.apiKey2);
	},
	//auth
	authorize: function (immediate) {
		App.log(this+': authorize');
		var conf = {'client_id': this.clientId,'scope': this.scopes,immediate: immediate};
		gapi.auth.authorize(conf,this.authorizeCB);
	},
	authorizeCB: function(authResult) {
		App.log(this+': authorizeCB');
		console.log(authResult);
		console.log(gapi.auth.getToken());
		if (authResult && !authResult.error) {
			App.gapi.isAuthorized = true;
			App.trigger('gapi:authok',authResult);
			$("#info-panel").text('Login OK!');
		} else {
			App.gapi.isAuthorized = false;
			App.trigger('gapi:authko',authResult);
			$("#info-panel").text('Login KO...');
		}
	},
	//load
	_numGapiClients: 3,
	_numGapiClientsLoaded: 0,
	loadGapiClients: function(cb) {
		App.log(this+': loadGapiClients');
		gapi.client.load('calendar', 'v3', function(resp) {
			if(resp && !resp.error) {
				App.log(this+': calendar loaded!');
				App.gapi.loadedGapiClient(cb)
			} else {
				console.error(resp);
			}
		});
		gapi.client.load('tasks', 'v1', function(resp) {
			if(resp && !resp.error) {
				App.log(this+': tasks loaded!');
				App.gapi.loadedGapiClient(cb)
			} else {
				console.error(resp);
			}
		});
		gapi.client.load('plus', 'v1', function(resp) {
			if(resp && !resp.error) {
				App.log(this+': plus loaded!');
				App.gapi.loadedGapiClient(cb)
			} else {
				console.error(resp);
			}
		});
	},
	loadedGapiClient: function(cb) {
		this._numGapiClientsLoaded++;
		App.log(this+': loadedGapiClient '+this._numGapiClientsLoaded+'/'+this._numGapiClients);
		if(this._numGapiClientsLoaded >= this._numGapiClients) {
			App.log(this+': All Gapi clients loaded!');
			if(typeof cb == 'function') {
				cb();
			}
		}
	},
	//api
	testAllApiCalls: function() {
		App.log(this+': testAllApiCalls');
		this.doTasksCall();
		this.doCalendarCall();
		this.doPlusCall();
	},
	doRequest: function(req, cb) {
		req.execute(function(resp, raw) {
			if(resp && !resp.error) {
				App.gapi.lastResp = resp;
				App.gapi.lastRaw = raw;
				App.log(resp);
				App.log(raw);
				if(typeof cb == 'function') {
					cb();
				}
			} else {
				console.error(resp);
			}
		});
	},
	doPlusCall: function() {
		App.log(this+': doPlusCall');
		var request = gapi.client.plus.people.get({
			'userId': 'me'
		});
		this.doRequest(request, function() {
			App.log(this+': doPlusCall done!');
		});
	},
	doTasksCall: function() {
		App.log(this+': doTasksCall');
		var request = gapi.client.tasks.tasklists.list({
			'userId': 'me'
		});
		this.doRequest(request, function() {
			App.log(this+': doTasksCall done!');
		});
	},
	getCalendars: function() {
		App.log(this+': doCalendarCall');
		var request = gapi.client.calendar.calendarList.list();
		this.doRequest(request, function() {
			App.log(this+': doCalendarCall done!');
		});
	},
	createCalendar: function() {
//		var request = gapi.client.calendar.calendarList.insert(this.calObj);
		var request = gapi.client.calendar.calendars.insert(this.calObj);
		this.doRequest(request, function() {
			App.log(this+': createCalendar done!');
		});
	},
	getEvents: function(id) {
		var req = gapi.client.calendar.events.list({
			'calendarId': id
		});
		this.doRequest(req);
	},
	createEvent: function() {
		var request = gapi.client.calendar.events.insert({
			'calendarId': 'primary',
			'resource': this.eveObj
		});
		this.doRequest(request, function() {
			App.log(this+': createEvent done!');
		});
	},
	calObj: {
//		"kind": "calendar#calendarListEntry",
//		"id": 'HowManyCalendar',
		"summary": 'How Many',
//		"summaryOverride": 'How Many',
		"title": 'How Many',
		"description": 'How Many Days have been since...',
		"backgroundColor": '#a00000',
		"foregroundColor": '#007000',
		"accessRole": 'owner',
		"timeZone": "Europe/Madrid",
//		"location": string,
//		"summaryOverride": string,
//		"colorId": string,
//		"defaultReminders": [
//			{
//				"method": string,
//				"minutes": integer
//			}
//		]
	},
	eveObj: {
		"summary": "All day event",
		"location": "Somewhere",
		"start": {
			"dateTime": "2013-08-14T00:00:00",
			"timeZone": "Europe/Madrid"
		},
		"end": {
			"dateTime": "2013-08-15T00:00:00",
			"timeZone": "Europe/Madrid"
		}
	}
});

App.on('gapi:loaded', function() {
	App.gapi = new App.Utils.GAPI();
	App.gapi.authorize(true);
});
App.on('gapi:authok', function() {
	App.log('gapi:authok')
	App.gapi.loadGapiClients(function () {
		App.trigger('gapi:ready');
	});
});

/**
 * Code from:
 * https://github.com/LuisSala/emberjs-jqm/blob/master/js/app.js
$(document).bind('mobileinit', function() {
	$.mobile.touchOverflowEnabled = true;
});

$(document).bind('pageinit', function() {
	console.log('pageinit');
//	var v = App.get('mainView');

//	if (!v) {
//		console.log('main not created');
//		v = App.MainView.create();
//		App.set('mainView', v);
//		v.append();
//	}
});
 */

/**
 * Code from:
 * https://code.google.com/p/google-api-javascript-client/source/browse/samples/authSample.html
 *
// Enter a client ID for a web application from the Google Developer Console.
// The provided clientId will only work if the sample is run directly from
// https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
// In your Developer Console project, add a JavaScript origin that corresponds to the domain
// where you will be running the script.
var clientId = '827915641106.apps.googleusercontent.com'; //web application
//var clientId = '827915641106-pv8v261cj864m79jtbsuv3civ1b81j5u.apps.googleusercontent.com'; //Installed application

// Enter the API key from the Google Develoepr Console - to handle any unauthenticated
// requests in the code.
// The provided key works for this sample only when run from
// https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
// To use in your own application, replace this API key with your own.
//var apiKey = 'AIzaSyDRJJspJ8iRBkR_z0hjHL53392XwnyVUmc'; //Referers: localhost
//var apiKey = 'AIzaSyAeH8j4q8ErVjUef7tpVKqTobaGpJPHnZg'; //Referers: any
var apiKey = 'WN85kTXZ5Ads7TWiCsUfquJT'; //client secret web app
//var apiKey = 'NDzGalbOgz7VW5VIfkpxNOCI'; //client secret installed app

// To enter one or more authentication scopes, refer to the documentation for the API.
var scopes = [
	'https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.readonly',
	'https://www.googleapis.com/auth/tasks','https://www.googleapis.com/auth/tasks.readonly',
	'https://www.googleapis.com/auth/plus.me'
];

// Use a button to handle authentication the first time.
function handleClientLoad() {
	App.log('handleClientLoad');
	gapi.client.setApiKey(apiKey);
	window.setTimeout(checkAuth, 1);
}

function checkAuth() {
	App.log('checkAuth');
	gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}

function handleAuthResult(authResult) {
	App.log('handleAuthResult');
//	App.log(authResult);
//	App.log(gapi.auth.getToken());
	
//	var authorizeButton = document.getElementById('authorize-button');
	if (authResult && !authResult.error) {
		$("#info-panel").text('Login OK!');
//		authorizeButton.style.visibility = 'hidden';
		loadGapiClients(function() {
			App.log('hola que ase?');
			makeApiCalls();
		});
	} else {
		$("#info-panel").text('Login KO...');
//		authorizeButton.style.visibility = '';
	}
}



function handleAuthClick(event) {
	App.log('handleAuthClick');
	gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
	return false;
}

App._numGapiClients = 3;
App._numGapiClientsLoaded = 0;
function loadGapiClients(cb) {
	gapi.client.load('calendar', 'v3', function() {
		App.log('calendar loaded!');
		loadedGapiClient(cb)
	});
	gapi.client.load('tasks', 'v1', function() {
		App.log('tasks loaded!');
		loadedGapiClient(cb)
	});
	gapi.client.load('plus', 'v1', function() {
		App.log('plus loaded!');
		loadedGapiClient(cb)
	});
}

function loadedGapiClient(cb) {
	App._numGapiClientsLoaded++;
	if(App._numGapiClientsLoaded >= App._numGapiClients) {
		App.log('All Gapi clients loaded!');
		cb();
	}
}

function makeApiCalls() {
	App.log('makeApiCall');
	makePlusCall();
	makeTasksCall();
	makeCalendarCall();
}

// Load the API and make an API call.  Display the results on the screen.
function makePlusCall() {
	App.log('makePlusCall');
	var request = gapi.client.plus.people.get({
		'userId': 'me'
	});
	request.execute(function(resp) {
		App.log('plus resp:');
		App.log(resp);
		if(resp.code == 200) {
			App.log('makePlusCall resp:');
			App.log(resp);
//			var heading = document.createElement('h4');
//			var image = document.createElement('img');
//			image.src = resp.image.url;
//			heading.appendChild(image);
//			heading.appendChild(document.createTextNode(resp.displayName));

			document.getElementById('content').appendChild(heading);
		} else {
			console.error(resp);
		}
	});
}

function makeTasksCall() {
	App.log('makeTasksCall');
	var request = gapi.client.tasks.tasklists.list({
		'userId': 'me'
	});
	request.execute(function(resp) {
		if(resp.code == 200) {
			App.log('makeTasksCall resp:');
			App.log(resp);
		} else {
			console.error(resp);
		}
	});
}

function makeCalendarCall() {
	App.log('makeCalendarCall');
	var request = gapi.client.calendar.calendarList.list();
	request.execute(function(resp) {
		if(resp.code == 200) {
			App.log('makeTasksCall resp:');
			App.log(resp);
		} else {
			console.error(resp);
		}
	});
}
*/