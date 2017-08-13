import {Component, ViewEncapsulation, Input} from '@angular/core';

@Component({
	selector: 'opportunities',
	templateUrl: 'opportunities.component.html',
	styleUrls: ['./opportunities.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class OpportunitiesComponent {
	@Input() data: string[];

	constructor() {

	}
}
