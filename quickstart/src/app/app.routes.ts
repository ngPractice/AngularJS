/**
	import angular modules.
*/
import { RouterModule, Routes } from '@angular/router';

/**
	import other modules.
*/
import { ElectronicsComponent } from './electronics/electronics.component';
import { OfficeSuppliesComponent } from './office-supplies/office-supplies.component';
import { PaperStationeryComponent } from './paper-stationery/paper-stationery.component';

/**
	router configuration.
*/
const routes: Routes = [
	{ path: 'electronics', component: ElectronicsComponent },
	{ path: 'office-supplies', component: OfficeSuppliesComponent },
	{ path: 'paper-stationery', component: PaperStationeryComponent},
	{ path: '', redirectTo: 'electronics', pathMatch: 'full'}
]
export const routing = RouterModule.forRoot(routes);