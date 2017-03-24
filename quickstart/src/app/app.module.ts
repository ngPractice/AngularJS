/**
	Import angular modules.
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

/**
	Import other modules.
*/
import { AppComponent }  from './app.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { OfficeSuppliesComponent } from './office-supplies/office-supplies.component';
import { PaperStationeryComponent } from './paper-stationery/paper-stationery.component';
import { routing } from './app.routes';

/**
	Decorator to create module.
	@property imports register all used modules.
	@property declarations register components, directives and pipes.
	@property bootstrap register component which will bootstrap.
*/
@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, ElectronicsComponent, OfficeSuppliesComponent, PaperStationeryComponent ],
  bootstrap:    [ AppComponent ]
})
/**
	AppModule class, it is a root module.
*/
export class AppModule { }
