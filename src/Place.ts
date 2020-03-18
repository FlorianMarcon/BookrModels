export interface Place {

	_id			:	number;
	
	name		:	string;

	address		:	string;

	cashback	:	number;

	rating		:	number;

	imageUrl			:	string;
}


export interface ICreatePlaceInput extends Partial<Place> {

	name	:	string;

	address	:	string;

	cashback	:	number;
}