(function () {
	'use strict';

	// UserController Registered 
	angular
		.module('md.user')
		.controller('UserController', UserController);

	// TODO: Add future dependencies here
	UserController.$inject = ['userService'];

	/**
	 * User Controller to bind user model and view
	 * @param userService
	 * @constructor
	*/
	function UserController(userService) {
		var vm = this;

		vm.selected = null;
		vm.users = [];
		vm.selectUser = selectUser;

		// Load all registered users
		userService
			.loadAllUsers()
			.then(function (users) {
				vm.users = [].concat(users);
				vm.selected = users[0];
			});

		// Select the current avatars
		// @param user
		function selectUser(user) {
			vm.selected = angular.isNumber(user) ? vm.users[user] : user;
		}
	}
})();