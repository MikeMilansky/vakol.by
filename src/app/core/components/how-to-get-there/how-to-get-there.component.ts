import { Component, ViewEncapsulation, OnDestroy, Input } from '@angular/core';

@Component({
	selector: 'st-how-to-get-there',
	templateUrl: 'how-to-get-there.component.html',
	styleUrls: ['how-to-get-there.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class HowToGetThereComponent implements OnDestroy {
	@Input() public data: any = {};

	constructor() {
	}

	ngOnDestroy() {
	}
}
