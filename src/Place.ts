import { PlaceCategory } from "./PlaceCategory";

export interface Place {

	_id			:	number;
	
	name		:	string;

	address		:	string;

	cashback	:	number;

	rating		:	number;

	imageUrl	:	string;

	placeCategory:	PlaceCategory;

	latitude	:	number;
	longitude	:	number;
}


export interface ICreatePlaceInput extends Partial<Place> {

	name	:	string;

	address	:	string;

	cashback	:	number;

	idPlaceCategory?	:	number | null;

	latitude?	:	number;
	longitude?	:	number;
}

export interface IUpdatePlaceInput {

	_id					:	number;

	name?				:	string;

	address?			:	string;

	cashback?			:	number;

	idPlaceCategory?	:	number | null;

	latitude?	:	number;
	longitude?	:	number;
}