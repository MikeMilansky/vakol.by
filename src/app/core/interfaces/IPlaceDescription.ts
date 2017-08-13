/**
 * Created by Nikit on 4/3/2017.
 */
export interface IPlaceDescription {
	id: number;
	name: string;
	updateDate: Date;
	description: string;
	point: {
		latitude: number,
		longitude: number
	}
}
