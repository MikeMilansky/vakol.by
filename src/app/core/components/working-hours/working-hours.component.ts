import { Component, ViewEncapsulation, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: 'st-working-hours',
	templateUrl: 'working-hours.component.html',
	styleUrls: ['working-hours.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class WorkingHoursComponent implements OnDestroy {
	@Input() public data: any = {};

	constructor(private activatedRoute: ActivatedRoute) {
	}

	ngOnDestroy() {
	}
}
