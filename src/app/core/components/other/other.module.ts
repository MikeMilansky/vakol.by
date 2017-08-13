import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { OtherComponent } from './other.component';

@NgModule({
	declarations: [OtherComponent],
	imports: [CommonModule, RouterModule],
	exports: [OtherComponent]
})
export class OtherModule {
	constructor() {
	}
}
