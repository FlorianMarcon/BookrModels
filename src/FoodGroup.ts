import {Place} from "./Place";
import { Food } from "./Food";

export interface FoodGroup {

	_id					:	string;
	
	name				:	string;

	place				:	Place;

	foods				:	Array<Food>;
}

export interface ICreateFoodGroupInput extends Partial<FoodGroup> {
	name				:	string;
}