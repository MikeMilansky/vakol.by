import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscriptions, Breadcrumb } from "../../entities";
import { PlaceService } from "../../services";

@Component({
	selector: 'breadcrumbs',
	templateUrl: 'breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsComponent implements OnDestroy {
	public breadcrumbs: Breadcrumb[] = [];
	private subscriptions: Subscriptions = new Subscriptions();

	constructor(private activatedRoute: ActivatedRoute, private placeService: PlaceService) {
		this.subscriptions.add(this.activatedRoute.params.subscribe((routParams: Params) => {
			this.subscriptions.add(this.placeService.breadcrumbs(routParams['id']).subscribe((breadcrumbs: Breadcrumb[]) => {
				this.breadcrumbs = breadcrumbs;
			}));
		}));
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
