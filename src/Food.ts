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
}

export interface ICreateFoodInput extends Partial<Food> {
	name			:	string;	

	price			:	number;

	description?	:	string;

	idFoodGroup?	:	number | null;
}

export interface IUpdateFoodInput extends Partial<ICreateFoodInput> {
	_id			:	number;

	name?			:	string;	

	price?			:	number;

	description?	:	string;

	idFoodGroup?	:	number | null;

}
export interface IFoodOptionInput {
	onlyUncathegorized:	boolean;
}