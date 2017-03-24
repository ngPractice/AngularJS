/**
 import angular modules.
*/
import {
	Component,
	OnInit 
} from '@angular/core';

/**
	Decorator to create component.
	@property moduleId used when specifying relative file path.
	@property selector element use in DOM
	@property templateUrl view url path
*/
@Component({
	moduleId: module.id,
	selector: 'paper-stationery',
	templateUrl: 'paper-stationery.component.html'
})
/**
	PaperStationeryComponent class
*/
export class PaperStationeryComponent implements OnInit {
	/**
		@constructor
		Used for dependency injection
		Inject require services here.
		Never to heavy initialization in constructor, better to avoid it.
	*/
	constructor() {}

	/**
		Component hook to initialize class properties, to call services.
	*/
	ngOnInit() {
		
	}
}