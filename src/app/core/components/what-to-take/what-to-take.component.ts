import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { PlaceService } from "../../services";
import { IWhatToTakeItem } from "../../interfaces";
import { Subscriptions } from "../../entities";

@Component({
	selector: 'what-to-take',
	templateUrl: 'what-to-take.component.html',
	styleUrls: ['./what-to-take.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class WhatToTakeComponent implements OnDestroy {
	public items: IWhatToTakeItem[] = [];
	private subscriptions: Subscriptions = new Subscriptions();

	constructor(private activatedRoute: ActivatedRoute, private placeService: PlaceService) {
		this.subscriptions.add(this.activatedRoute.params.subscribe((routParams: Params) => {
			this.subscriptions.add(this.placeService.whatToTake(routParams['id']).subscribe((items: IWhatToTakeItem[]) => {
				this.items = items;
			}));
		}));
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}
}
