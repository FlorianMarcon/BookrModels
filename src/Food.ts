import {Place} from "./Place";
import {FoodGroup} from "./FoodGroup";
import { DateTimeSlot } from "./DateTimeSlot";

export interface Food {

	_id				:	number;
	
	name			:	string;

	price			:	number;

	description		:	string;

	imageUrl		:	string;

	place			:	Place;

	foodGroup		:	FoodGroup;
	indexFoodGroup	:	number;

	isAvailable		:	boolean;
	isPublic		:	boolean;

	timeToWait		:	number;

	/** FIELD RESOLVERS */
	
	slots?			:	Array<DateTimeSlot>
}

export interface ICreateFoodInput extends Partial<Food> {
	name			:	string;	

	price			:	number;

	description?	:	string;

	idFoodGroup?	:	number | null;

	timeToWait?		:	number;
}

export interface IUpdateFoodInput extends Partial<ICreateFoodInput> {
	_id			:	number;

	name?			:	string;	

	price?			:	number;

	description?	:	string;

	idFoodGroup?	:	number | null;

	isAvailable?	:	boolean;
	isPublic?		:	boolean;

	timeToWait?		:	number;
}

export interface IFoodOptionInput {
	onlyUncathegorized:	boolean;
}