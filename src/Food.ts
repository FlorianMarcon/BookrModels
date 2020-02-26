import {Place} from "./Place";
import {FoodGroup} from "./FoodGroup";

export interface Food {

	_id			:	string;
	
	name		:	string;

	price		:	number;

	idPlace?			:	string;

	idFoodGroup?			:	string;

	description?		:	string;

	imageUrl?			:	string;

	place?				:	Place;

	foodGroup?			:	FoodGroup;
}
