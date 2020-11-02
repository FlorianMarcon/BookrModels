import { PlaceCategory } from "./PlaceCategory";
import { FoodGroup } from "./FoodGroup";
import { Menu } from "./Menu";
import { DateTimeSlot } from "./DateTimeSlot";

export enum PaymentMethod {
	NO_VERIFICATION = "NO_VERIFICATION",
	SMS_VERIFICATION = "SMS_VERIFICATION",
}

export enum PlaceStatus {
	AVAILABLE = "AVAILABLE",
	SOON_AVAILABLE = "SOON_AVAILABLE",
	NOT_AVAILABLE = "NOT_AVAILABLE",
	TEMPORARILY_UNAVAILABLE = "TEMPORARILY_UNAVAILABLE",
}
export interface Place {

	_id			:	number;
	
	name		:	string;

	description	:	string;

	city		:	string;
	line1		:	string;
	line2		:	string;
	state		:	string;
	postCode		:	string;

	fixedFee		:	number;
	percentageFee	:	number;
	cashback	:	number;

	rating		:	number;

	imageUrl	:	string;
	logoUrl		:	string;

	placeCategory:	PlaceCategory;

	latitude	:	number;
	longitude	:	number;

	foodsgroups?	:	Array<FoodGroup>;
	menues?		:	Array<Menu>;

	openingHours?	:	Array<DateTimeSlot>;

	timeToWait	:	number;

	isFavorite	:	boolean;
	isAvailable	:	boolean;
	isPublic	:	boolean;

	status		:	PlaceStatus;

	loginStripeLink:	string;
}


export interface ICreatePlaceInput extends Partial<Place> {

	name	:	string;

	description?	:	string;

	city		:	string;
	line1		:	string;
	line2		:	string;
	state		:	string;
	postCode		:	string;

	fixedFee?		:	number;
	percentageFee?	:	number;
	cashback	:	number;

	idPlaceCategory?	:	number | null;

	latitude?	:	number;
	longitude?	:	number;

	timeToWait?	:	number;
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

	description?	:	string;

	city?		:	string;
	line1?		:	string;
	line2?		:	string;
	state?		:	string;
	postCode?		:	string;

	fixedFee?			:	number;
	percentageFee?		:	number;
	cashback?			:	number;

	idPlaceCategory?	:	number | null;

	latitude?	:	number;
	longitude?	:	number;

	timeToWait?	:	number;
}

export interface IUpdatePlaceLocationByAddressInput {

	city		:	string;
	line1		:	string;
	line2?		:	string;
	state		:	string;
	postCode		:	string;
}