import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import {PlaceService} from "../../core/services";
import { IPlaceDescription, IWhatToTakeItem } from "../../core/interfaces";

@Component({
	selector: 'place',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./place.styles.scss'],
	templateUrl: './place.template.html'
})
export class PlaceComponent implements OnInit, OnDestroy {
	public albumData = {};
	public descriptionData: IPlaceDescription = { id: null, name: '',  updateDate: null, description: '', point: null };
	public contactInfo: any = {};
	public servicesData;
	public workingHoursInfo = {};
	public howToGetThereInfo = {};
	public otherInfo = {};
	private placeId = 123;
	constructor(private placeService: PlaceService) {

	}

	public ngOnInit() {
		this.placeService.album(this.placeId).subscribe((res) => {
			this.albumData = res;
		});
		this.placeService.description(this.placeId).subscribe((res) => {
			this.descriptionData = res;
		});
		this.placeService.services(this.placeId).subscribe((res) => {
			this.servicesData = res;
		});
		this.placeService.contact(this.placeId).subscribe((res) => {
			this.contactInfo = res;
		});
		this.placeService.workingHours(this.placeId).subscribe((res) => {
			this.workingHoursInfo = res;
		});
		this.placeService.howToGetThere(this.placeId).subscribe((res) => {
			this.howToGetThereInfo = res;
		});
		this.placeService.other(this.placeId).subscribe((res) => {
			this.otherInfo = res;
		});
	}

	public ngOnDestroy() {
		// unsubscribe here
	}
}
