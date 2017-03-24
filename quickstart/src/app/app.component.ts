/**
	Import angular modules.
*/
import { Component } from '@angular/core';

/**
	Decorator to create component
	@property moduleId
	@property selector
	@property templateUrl
*/
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
/**
	AppComponent Class
*/
export class AppComponent  { 
	/**
		@constructor
		It must used for only dependency injection.
		Inject required services.
	*/
	constructor() {

	}
}
