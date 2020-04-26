import { PlaceCategory } from "./PlaceCategory";
import { FoodGroup } from "./FoodGroup";
import { Menu } from "./Menu";
import { DateTimeSlot } from "./DateTimeSlot";

export interface Place {

	_id			:	number;
	
	name		:	string;

	city		:	string;
	line1		:	string;
	line2		:	string;
	state		:	string;
	postCode		:	string;

	cashback	:	number;

	rating		:	number;

	imageUrl	:	string;
	logoUrl		:	string;

	placeCategory:	PlaceCategory;

	latitude	:	number;
	longitude	:	number;

	foodsgroups?	:	Array<FoodGroup>;
	menues?		:	Array<Menu>;

	slots?		:	Array<DateTimeSlot>;
}


export interface ICreatePlaceInput extends Partial<Place> {

	name	:	string;

	city		:	string;
	line1		:	string;
	line2		:	string;
	state		:	string;
	postCode		:	string;

	cashback	:	number;

	idPlaceCategory?	:	number | null;

	latitude?	:	number;
	longitude?	:	number;
}

export interface ICreateStripeAccountInput extends Partial<Place> {

	name	:	string;

	city		:	string;
	line1		:	string;
	line2		:	string;
	state		:	string;
	postCode		:	string;
}

export interface IUpdatePlaceInput {

	_id					:	number;

	name?				:	string;

	city?		:	string;
	line1?		:	string;
	line2?		:	string;
	state?		:	string;
	postCode?		:	string;

	cashback?			:	number;

	idPlaceCategory?	:	number | null;

	latitude?	:	number;
	longitude?	:	number;
}