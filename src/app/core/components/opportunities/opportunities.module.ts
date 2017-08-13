import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { OpportunitiesComponent } from './opportunities.component';

@NgModule({
	declarations: [OpportunitiesComponent],
	imports: [CommonModule, RouterModule],
	exports: [OpportunitiesComponent]
})
export class OpportunitiesModule {
	constructor() {
	}
}
