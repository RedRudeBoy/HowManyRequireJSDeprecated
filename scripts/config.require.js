define({
	app_name: "App", 
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
		bootstrap: {
			deps: ['jquery'],
			exports: "$.fn.tooltip"
		}
	},
	paths : {
		'AppInit': 'app/AppInit',
		'AppConf': 'app/config.app',
		'App': 'app/App',
		
		'models': 'app/models',
		'Gapi': 'app/models/GapiProvider',
		'pages': 'app/pages',
		/*libs*/
		'jquery': 'libs/jquery/1.9.1/jquery',
		'handlebars': 'libs/handlebars/1.0.0/handlebars',
		'ember': 'libs/ember/1.0.0/ember',
		'bootstrap': 'libs/bootstrap/2.3.2/js/bootstrap',
		'moment': 'libs/moment/min/moment.min',
		'momentlangs': 'libs/moment/min/langs.min',
		/*requirejs-plugins*/
		'text': 'libs/requirejs-plugins/text',
		'hbs': 'libs/requirejs-plugins/hbs',
		'domReady': 'libs/requirejs-plugins/domReady',
		'async': 'libs/requirejs-plugins/async'
	},
	//make sure it is enough to load all async scripts
	waitSeconds : 30,
	/* hbs plugin options */
	hbs: {
		disableI18n: true,
		templateExtension: "hbs"
	},
	/* require-css/less plugins */
	map: {
		'*': {
			'css': 'libs/require-css/css',
			//'less': 'libs/require-less/less-builder'
			'less': 'libs/require-less/less'
		}
	},
	packages: [
		{
			name: 'css',
			location: 'require-css',
			main: 'css'
		},
		{
			name: 'less',
			location: 'require-less',
			main: 'less'
		}
	],
});