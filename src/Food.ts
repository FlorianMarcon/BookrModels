import {Place} from "./Place";
import {FoodGroup} from "./FoodGroup";

export interface Food {

	_id			:	number;
	
	name		:	string;

	price		:	number;

	description		:	string;

	imageUrl			:	string;

	place				:	Place;

	foodGroup			:	FoodGroup;

	isAvailable			:	boolean;

	timeToWait	:	number;
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

	timeToWait?		:	number;
}

export interface IFoodOptionInput {
	onlyUncathegorized:	boolean;
}