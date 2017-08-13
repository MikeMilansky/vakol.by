import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HowToGetThereComponent } from './how-to-get-there.component';

@NgModule({
	declarations: [HowToGetThereComponent],
	imports: [CommonModule, RouterModule],
	exports: [HowToGetThereComponent]
})
export class HowToGetThereModule {
	constructor() {
	}
}
