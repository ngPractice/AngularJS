// This is a factory method which injected in run block
// It helps to print welcome message
(function () {
	'use strict';
	
	// Register 'printMessageService' factory on services module
	angular
		.module('md.welcomeMessage')
		.factory('printMessageService', printMessageService);

	// TODO: add future dependencies here
	printMessageService.$inject = [];

	// Factory function
	// This function has 'printHello' method which help to print welcome message
	// and return object to available 'printHello' method outside
	function printMessageService() {
		var printMessageService = {};

		printMessageService.printHello = function () {
			console.log('Hello Material World!');
		};

		return printMessageService;
	}
})();