// This is run block which will run when application get bootstrap
// Printing a message once application started
(function () {
	'use strict';

	// Register run block on main module
	angular
		.module('materialDesign')
		.run(runBlock);

	// TODO: Add future dependencies here	
	runBlock.$inject = [
		'printMessageService'
	];

	// Print welcome message once app is started
	function runBlock(printMessageService) {
		printMessageService.printHello();
	}
})();