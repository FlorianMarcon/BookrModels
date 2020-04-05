import { PlaceCategory } from "./PlaceCategory";

export interface Place {

	_id			:	number;
	
	name		:	string;

	address		:	string;

	cashback	:	number;

	rating		:	number;

	imageUrl	:	string;

	placeCategory:	PlaceCategory;
}


export interface ICreatePlaceInput extends Partial<Place> {

	name	:	string;

	address	:	string;

	cashback	:	number;

	idPlaceCategory?	:	number;
}