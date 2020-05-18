import {Place} from "./Place";
import { Food } from "./Food";

export interface FoodGroup {

	_id					:	number;
	
	name				:	string;

	place				:	Place;

	foods				:	Array<Food>;

	index				:	number;
}

export interface ICreateFoodGroupInput {
	name				:	string;
}

export interface IUpdateFoodGroupInput {
	_id				:	number;

	name?				:	string;

	index?				:	number;
}