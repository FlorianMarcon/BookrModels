import {Place} from "./Place";

export interface Event {

	_id					:	string;
	
	guardPageUrl		:	string;

	contentUrl			:	string;

	idPlaces			:	Array<string>;

	startDate			:	Date;

	endDate				:	Date;

	places?				:	Array<Place>;
}
