import { Injectable } from '@angular/core';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';


import 'rxjs/add/operator/map';

import { Breadcrumb } from "../../entities";
import { IBreadcrumbDTO, IBreadcrumbsTree, IService, IPlaceDescription, IWhatToTakeItem } from "../../interfaces";
import { Observable } from "rxjs";
import { appSettings } from '../../../app.settings.ts';
import * as _ from 'lodash';

@Injectable()
export class PlaceService {

	private placeUrl: string = 'https://private-32d0e-stezhka.apiary-mock.com/web/place';
	private placeRealUrl: string = `${appSettings.apiUrl}place`;

	constructor(private http: Http) {
	}

	public breadcrumbs (placeId: number): Observable<Breadcrumb[]> {
		return this.http.get(`${this.placeUrl}/${placeId}/breadcrumbs`)
			.map((response: Response) => response.json())
			.map((res) => this.mapBreadcrumbs(res));
	}

	public description (placeId: number) {
		return this.http.get(`${this.placeUrl}/${placeId}/description`)
			.map((response: Response) => response.json())
			.map((res: IPlaceDescription) => res);
	}

	public album (placeId: number) {
		return this.http.get(`${this.placeUrl}/${placeId}/album`)
			.map((response: Response) => response.json())
			.map((res) => {
				return res;
			});
	}

	public whatToTake (placeId: number) {
		return this.http.get(`${this.placeUrl}/${placeId}/what_to_take`)
			.map((response: Response) => response.json())
			.map((res: IWhatToTakeItem[]) => res);
	}

	public services (placeId: number) {
		return this.http.get(`${this.placeUrl}/${placeId}/services`)
			.map((response: Response) => response.json())
			.map((res: IService[]) => res);
	}

	public contact (placeId: number) {
		return this.http.get(`${this.placeUrl}/${placeId}/contact`)
			.map((response: Response) => response.json());
	}

	public workingHours (placeId: number) {
		return this.http.get(`${this.placeUrl}/${placeId}/working_hours`)
			.map((response: Response) => response.json());
	}

	public howToGetThere (placeId: number) {
		return this.http.get(`${this.placeUrl}/${placeId}/how_to_get_there`)
			.map((response: Response) => response.json());
	}

	public other (placeId: number) {
		return this.http.get(`${this.placeUrl}/${placeId}/other`)
			.map((response: Response) => response.json());
	}

	private mapBreadcrumbs(breadcrumbs: IBreadcrumbDTO[]) {
		return this.plainBreadcrumbs(this.convertBreadcrumbsToTree(breadcrumbs));
	}

	private convertBreadcrumbsToTree(breadcrumbs: IBreadcrumbDTO[]) {
		let map = {},
			node,
			root: IBreadcrumbsTree;

		for (let i = 0; i < breadcrumbs.length; i += 1) {
			node = breadcrumbs[i];
			map[node.id] = i; // use map to look-up the parents
			if (node.parentId) {
				breadcrumbs[map[node.parentId]].child = node;
			} else {
				root = node;
			}
		}

		return root;
	}

	private plainBreadcrumbs(breadcrumbs: IBreadcrumbsTree) {
		let breadcrumb = new Breadcrumb(breadcrumbs);
		return breadcrumbs.child ? [breadcrumb].concat(this.plainBreadcrumbs(breadcrumbs.child)) : [breadcrumb];
	}
}
