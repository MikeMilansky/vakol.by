import {Component, ViewEncapsulation, Input} from '@angular/core';

@Component({
	selector: 'map',
	templateUrl: 'map.component.html',
	styleUrls: ['./map.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class MapComponent {
	@Input() data: any;

	constructor() {

	}
}
