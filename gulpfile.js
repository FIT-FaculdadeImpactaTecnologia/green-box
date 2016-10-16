var elixir = require('laravel-elixir');
elixir.config.sourcemaps = true;

var resources = "./resources/";
var vendor = resources + 'vendor/';

var assets = "./public/assets/"
var app = "./app/";

elixir(function (mix) {

	// *****************************************************************
	// Aplicação
	// *****************************************************************
	mix.scripts([
		// Core files
		app + 'app.js',
		app + 'config.js',
		app + 'routes.js',

		// Modules
		app + 'modules'
		
	], assets + 'js/app.js');

	mix.less([
	    resources + 'less/custom/custom.less'
	], assets + 'css/app.css');

	// JS MODULES
	mix.scripts([
		vendor + 'angular/angular.js',
		vendor + 'angular-aria/angular-aria.js',
		vendor + 'angular-animate/angular-animate.js',
		vendor + 'angular-material/angular-material.js',
		vendor + 'angular-ui-router/release/angular-ui-router.min.js'
	], assets + 'js/libs.js');

	// CSS MODULES
	mix.styles([
		vendor + 'angular-material/angular-material.css',
		vendor + 'font-awesome/css/font-awesome.min.css'
	], assets + 'css/libs.css');

	// COPY FONTS
	mix.copy([
		vendor + 'font-awesome/fonts',
	], assets + 'fonts');
});
