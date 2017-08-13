import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [CarouselComponent],
	imports: [NgbModule],
	exports: [CarouselComponent]
})
export class CarouselModule {
	constructor() {
	}
}
