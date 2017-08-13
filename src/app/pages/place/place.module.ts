// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './place.routes';

// custom components
import { PlaceComponent } from './place.component';
import { OpportunitiesModule, CarouselModule, MapModule, BreadcrumbsModule, WhatToTakesModule, ContactsModule, WorkingHoursModule, HowToGetThereModule, OtherModule, StatsModule } from '../../core/components';

// services
import { PlaceService } from '../../core/services';

@NgModule({
	declarations: [
		PlaceComponent
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		OpportunitiesModule,
		CarouselModule,
		MapModule,
		BreadcrumbsModule,
		WhatToTakesModule,
		ContactsModule,
		WorkingHoursModule,
		HowToGetThereModule,
		OtherModule,
		StatsModule
	],
	providers: [PlaceService]
})
export class PlaceModule {
	constructor() {
	}
}
