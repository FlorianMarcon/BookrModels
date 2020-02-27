import {Place} from "./Place";
import {FoodGroup} from "./FoodGroup";

export interface Food {

	_id			:	string;
	
	name		:	string;

	price		:	number;

	description?		:	string;

	imageUrl?			:	string;

	place?				:	Place;

	foodGroup?			:	FoodGroup;
}
