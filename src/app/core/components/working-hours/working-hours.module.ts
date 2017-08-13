import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { WorkingHoursComponent } from './working-hours.component';

@NgModule({
	declarations: [WorkingHoursComponent],
	imports: [CommonModule, RouterModule],
	exports: [WorkingHoursComponent]
})
export class WorkingHoursModule {
	constructor() {
	}
}
