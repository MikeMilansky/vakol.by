/**
 * Created by Dmitrii_Uskov on 1/10/2017.
 */
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

export class Subscriptions {
	public subscriptions: Array<any>;

	static unsubscribe(collection: Array<any>) {
		collection.forEach((s) => {
			if (s && _.isFunction(s.unsubscribe)) {
				s.unsubscribe();
			}
		});
	}

	constructor() {
		this.subscriptions = [];
	}

	public add(s: any): void {
		if (_.isArray(s)) {
			this.subscriptions = this.subscriptions.concat(s);
		}
		else {
			this.subscriptions.push(s);
		}
	}

	public unsubscribe(): void {
		Subscriptions.unsubscribe(this.subscriptions);
	}

}
