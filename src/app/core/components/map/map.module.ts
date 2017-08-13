import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MapComponent } from './map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
	declarations: [MapComponent],
	imports: [AgmCoreModule, CommonModule],
	exports: [MapComponent]
})
export class MapModule {
	constructor() {
	}
}
