import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { WhatToTakeComponent } from './what-to-take.component';

@NgModule({
	declarations: [WhatToTakeComponent],
	imports: [CommonModule, RouterModule],
	exports: [WhatToTakeComponent]
})
export class WhatToTakesModule {
	constructor() {
	}
}
