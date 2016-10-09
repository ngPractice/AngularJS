// 'myApp' is a main application module.
// It has one dependency on ngMaterial module.
(function () {
	'use strict';
	
	// TODO: Add future dependency modules here
	var dependencies = [
		'ngMaterial',
		'md.welcomeMessage',
		'md.user'
	];

	// Creating myApp module
	angular
		.module('materialDesign', dependencies);
})();