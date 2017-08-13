import { Component, ViewEncapsulation, OnDestroy, Input } from '@angular/core';

@Component({
	selector: 'st-other',
	templateUrl: 'other.component.html',
	styleUrls: ['other.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class OtherComponent implements OnDestroy {
	@Input() public data: any = {};

	constructor() {
	}

	ngOnDestroy() {
	}
}
