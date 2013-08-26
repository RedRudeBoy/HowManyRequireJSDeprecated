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
		'App': 'app/App',
		
		'models': 'app/models',
		'pages': 'app/pages',
		/*libs*/
		'jquery': 'libs/jquery/1.9.1/jquery',
		'handlebars': 'libs/handlebars/1.0.rc.3/handlebars',
		'ember': 'libs/ember/1.0.0-rc.3/ember',
		'bootstrap': 'libs/bootstrap/2.3.2/js/bootstrap',
		/*requirejs-plugins*/
		'text': 'libs/requirejs-plugins/text',
		'hbs': 'libs/requirejs-plugins/hbs',
		'domReady': 'libs/requirejs-plugins/domReady'
	},
	/* hbs plugin options */
	hbs: {
		disableI18n: true,
		templateExtension: "hbs"
	},
	/* require-css plugin */
	map: {
		'*': {
			'css': 'libs/require-css/css' // or whatever the path to require-css is
		}
	}

});
