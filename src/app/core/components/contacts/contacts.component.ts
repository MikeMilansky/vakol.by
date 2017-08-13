import { Component, ViewEncapsulation, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
	selector: 'st-contacts',
	templateUrl: 'contacts.component.html',
	styleUrls: ['contacts.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class ContactsComponent implements OnDestroy {
	@Input() public data: any = {};

	constructor(private activatedRoute: ActivatedRoute) {
	}

	ngOnDestroy() {
	}
}
