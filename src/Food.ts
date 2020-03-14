import {Place} from "./Place";
import {FoodGroup} from "./FoodGroup";

export interface Food {

	_id			:	string;
	
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

	idFoodGroup?	:	string;
}