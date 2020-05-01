import {Place} from "./Place";

export interface Event {

	_id					:	number;
	
	title				:	string;

	guardPageUrl?		:	string;

	contentUrl?			:	string;

	startDate			:	Date;

	endDate				:	Date;

	places				:	Array<Place>;
}

export interface ICreateEventInput {
	title				:	string;

	startDate			:	Date;

	endDate				:	Date;

	idPlaces?				:	Array<number>;
}

export interface IUpdateEventInput {
	_id					:	number;

	title?				:	string;

	startDate?			:	Date;

	endDate?				:	Date;

	idPlaces?				:	Array<number>;
}